import React, { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, RigidBody, useSphericalJoint, useFixedJoint } from '@react-three/rapier';

// Extend Drei's MeshLine for the string
import { extend } from '@react-three/fiber';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
extend({ MeshLineGeometry, MeshLineMaterial });

const BAND_LENGTH = 14;
const BAND_SEGMENTS = 14; // Number of joints in the string

export default function Lanyard({ children }) {
    const [dragged, setDragged] = useState(false);
    const band = useRef([]);
    const card = useRef();
    const j1 = useRef();
    const fixed = useRef();

    // Calculate default curves for the initial band shape
    const curve = useMemo(() => {
        const points = [];
        for (let i = 0; i <= BAND_SEGMENTS; i++) {
            points.push(new THREE.Vector3(0, BAND_LENGTH - (i * BAND_LENGTH) / BAND_SEGMENTS, 0));
        }
        return new THREE.CatmullRomCurve3(points);
    }, []);

    const [positions, setPositions] = useState(() => curve.getPoints(BAND_SEGMENTS));

    useFrame((state) => {
        // 1. Sync the string visual to the physics bodies
        const newPositions = [];
        if (fixed.current) {
            newPositions.push(fixed.current.translation());
        } else {
            newPositions.push(new THREE.Vector3(0, BAND_LENGTH, 0)); // Anchor point
        }

        for (let i = 0; i < band.current.length; i++) {
            if (band.current[i]) {
                newPositions.push(band.current[i].translation());
            }
        }

        if (card.current) {
            // Attach the end of the string to the top of the card
            const cardPos = card.current.translation();
            const cardQuat = card.current.rotation();

            // Offset to where the lanyard clip would attach to the card
            const attachmentOffset = new THREE.Vector3(0, 1.5, 0);
            attachmentOffset.applyQuaternion(cardQuat);
            attachmentOffset.add(cardPos);

            newPositions.push(attachmentOffset);
        }

        if (newPositions.length === BAND_SEGMENTS + 2) {
            setPositions(newPositions);
        }

        // 2. Interactive dragging (Mouse pull)
        if (dragged && card.current) {
            const vec = new THREE.Vector3();
            state.pointer.unproject(state.camera);
            vec.copy(state.pointer).sub(state.camera.position).normalize();

            // Calculate depth distance to move card to mouse
            const distance = -state.camera.position.z / vec.z;
            vec.multiplyScalar(distance).add(state.camera.position);

            // Apply kinematic pull
            card.current.setNextKinematicTranslation({ x: vec.x, y: vec.y, z: vec.z });

            // Wake up the physics string
            for (let i = 0; i < band.current.length; i++) {
                if (band.current[i]) band.current[i].wakeUp();
            }
        }
    });

    return (
        <group>
            {/* Invisible anchor point in the sky */}
            <RigidBody ref={fixed} type="fixed" position={[0, BAND_LENGTH, 0]} />

            {/* Physics String Segments */}
            {positions.map((pos, i) => {
                if (i === 0 || i === positions.length - 1) return null; // Skip first and last as they are anchors
                const idx = i - 1;
                return (
                    <BandSegment
                        key={i}
                        ref={(el) => (band.current[idx] = el)}
                        position={[pos.x, pos.y, pos.z]}
                        prev={idx === 0 ? fixed : band.current[idx - 1]}
                    />
                );
            })}

            {/* The visible string mesh */}
            <mesh>
                <meshLineGeometry attach="geometry" points={positions} />
                <meshLineMaterial
                    attach="material"
                    color="white"
                    depthTest={false}
                    lineWidth={0.15}
                    resolution={[window.innerWidth, window.innerHeight]}
                />
            </mesh>

            {/* The Heavy Card Anchor */}
            <CardAnchor
                ref={card}
                prev={band.current[band.current.length - 1]}
                position={[0, 0, 0]}
                onPointerDown={(e) => {
                    e.stopPropagation();
                    e.target.setPointerCapture(e.pointerId);
                    setDragged(true);
                }}
                onPointerUp={(e) => {
                    e.stopPropagation();
                    e.target.releasePointerCapture(e.pointerId);
                    setDragged(false);

                    // Switch back to dynamic physics simulation 
                    if (card.current) {
                        card.current.setBodyType(0); // 0 = dynamic in Rapier
                    }
                }}
                dragged={dragged}
            >
                {children}
            </CardAnchor>

            <Environment resolution={256}>
                <group rotation={[-Math.PI / 3, 0, 1]}>
                    <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
                    <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
                    <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[5, 1, -1]} scale={2} />
                    <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
                </group>
            </Environment>

        </group>
    );
}

// Inner joint segment for the string
const BandSegment = React.forwardRef(({ position, prev }, ref) => {
    // Use spherical joints to link each string segment together like a chain
    useSphericalJoint(prev, ref, [
        [0, -BAND_LENGTH / BAND_SEGMENTS / 2, 0],
        [0, BAND_LENGTH / BAND_SEGMENTS / 2, 0],
    ]);

    return (
        <RigidBody
            ref={ref}
            position={position}
            type="dynamic"
            linearDamping={2}
            angularDamping={2}
            friction={0.1}
            colliders={false}
            mass={0.1}
        >
            <BallCollider args={[0.1]} />
        </RigidBody>
    );
});

// The Heavy Attachment (The ID Card Mount)
const CardAnchor = React.forwardRef(({ children, prev, position, onPointerDown, onPointerUp, dragged }, ref) => {

    // Connect the top of the card to the final string segment
    useSphericalJoint(prev, ref, [
        [0, -BAND_LENGTH / BAND_SEGMENTS / 2, 0],
        [0, 1.5, 0], // Anchor point 1.5 units above the card's center
    ]);

    return (
        <RigidBody
            ref={ref}
            position={position}
            type={dragged ? "kinematicPosition" : "dynamic"}
            linearDamping={1}
            angularDamping={1}
            friction={0.1}
            mass={3} // Make the card heavy so the string acts taut
        >
            <CuboidCollider args={[1.5, 2.2, 0.1]} /> {/* Hitbox matching ID card shape */}

            <group
                onPointerDown={onPointerDown}
                onPointerUp={onPointerUp}
            >
                {children}
            </group>
        </RigidBody>
    );
});
