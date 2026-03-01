import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree, extend } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

// Extend MeshLine for R3F declarative use
extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ children }) {
    // References for the band mesh and the physics joints
    const band = useRef();
    const fixed = useRef();
    const j1 = useRef();
    const j2 = useRef();
    const j3 = useRef();
    const card = useRef();

    // Reusable vectors (allocated once, reused every frame)
    const vec = new THREE.Vector3();
    const ang = new THREE.Vector3();
    const rot = new THREE.Vector3();
    const dir = new THREE.Vector3();

    // Canvas size for meshline resolution
    const { width, height } = useThree((state) => state.size);

    // A Catmull-Rom curve with 4 control points
    const [curve] = useState(
        () =>
            new THREE.CatmullRomCurve3([
                new THREE.Vector3(1.5, 0, 0),
                new THREE.Vector3(1, 0, 0),
                new THREE.Vector3(0.5, 0, 0),
                new THREE.Vector3(0, 0, 0),
            ])
    );

    const [dragged, drag] = useState(false);
    const [ready, setReady] = useState(false);

    // --- Physics Joints ---
    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
    useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

    // --- Frame Loop ---
    useFrame((state) => {
        // Wait for all Rapier RigidBody refs to be populated (they mount async via useEffect)
        if (!fixed.current || !j1.current || !j2.current || !j3.current || !card.current) {
            return; // Skip this frame entirely — physics isn't ready yet
        }

        if (!ready) setReady(true); // Flip the gate once to trigger mesh render

        // 1. Dragging logic
        if (dragged) {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
            dir.copy(vec).sub(state.camera.position).normalize();
            vec.add(dir.multiplyScalar(state.camera.position.length()));
            card.current.setNextKinematicTranslation({
                x: vec.x - dragged.x,
                y: vec.y - dragged.y,
                z: vec.z - dragged.z,
            });
        }

        // 2. Calculate Catmull-Rom curve from joint positions
        curve.points[0].copy(j3.current.translation());
        curve.points[1].copy(j2.current.translation());
        curve.points[2].copy(j1.current.translation());
        curve.points[3].copy(fixed.current.translation());

        // 3. Update the meshline geometry imperatively
        if (band.current?.geometry) {
            band.current.geometry.setPoints(curve.getPoints(32));
        }

        // 4. Tilt the card back towards the screen
        ang.copy(card.current.angvel());
        rot.copy(card.current.rotation());
        card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    });

    return (
        <>
            {/* Fixed anchor point at the top */}
            <RigidBody ref={fixed} type="fixed" />

            {/* Three rope-chain segments */}
            <RigidBody position={[0.5, 0, 0]} ref={j1}>
                <BallCollider args={[0.1]} />
            </RigidBody>
            <RigidBody position={[1, 0, 0]} ref={j2}>
                <BallCollider args={[0.1]} />
            </RigidBody>
            <RigidBody position={[1.5, 0, 0]} ref={j3}>
                <BallCollider args={[0.1]} />
            </RigidBody>

            {/* The visible band/string mesh — only render when physics is ready */}
            {ready && (
                <mesh ref={band}>
                    <meshLineGeometry />
                    <meshLineMaterial
                        color="white"
                        depthTest={false}
                        resolution={[width, height]}
                        lineWidth={1}
                    />
                </mesh>
            )}

            {/* The interactive card */}
            <RigidBody
                ref={card}
                type={dragged ? 'kinematicPosition' : 'dynamic'}
                angularDamping={10}
                linearDamping={2}
            >
                <CuboidCollider args={[0.8, 1.125, 0.01]} sensor />
                <group
                    onPointerUp={() => drag(false)}
                    onPointerDown={(e) =>
                        drag(
                            new THREE.Vector3()
                                .copy(e.point)
                                .sub(vec.copy(card.current.translation()))
                        )
                    }
                >
                    {children}
                </group>
            </RigidBody>

            <Environment resolution={256}>
                <group rotation={[-Math.PI / 3, 0, 1]}>
                    <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
                    <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
                    <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[5, 1, -1]} scale={2} />
                    <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
                </group>
            </Environment>
        </>
    );
}
