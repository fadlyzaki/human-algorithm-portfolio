import React from 'react';

const ProjectKinship = () => {
    return (
        <div className="w-full h-full min-h-[85vh] rounded-xl overflow-hidden bg-[#1e293b] shadow-inner">
            <iframe
                src="/project-kinship-proto.html"
                title="Grab Merantau Prototype"
                className="w-full h-full min-h-[85vh] border-0"
                sandbox="allow-scripts allow-same-origin"
            />
        </div>
    );
};

export default ProjectKinship;
