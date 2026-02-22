// components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
    return (
    
        <div className="bg-neutral-800 bg-opacity-70 p-4 md:p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-500/50 flex flex-col h-full">
            
       
            <img 
                src={project.imageUrl} 
                alt={`${project.name} screenshot`} 
                className="w-full h-40 object-cover rounded-md mb-4"
            />

            <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
             
            <div className="mb-4">
                <span className="text-sm text-gray-400 block mb-2">Technologies:</span>
                <div className="flex flex-wrap gap-3">
                    {project.techLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={`${logo.name} logo`}
                            className="w-8 h-8 object-contain"
                            title={logo.name}
                        />
                    ))}
                </div>
            </div>
            <p className="text-gray-300 mb-4 text-sm grow whitespace-pre-line">
                {project.details}
            </p>
            
            {project.liveLink && (
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-neutral-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded text-center transition-colors duration-300 mt-auto"
                >
                    View Live
                </a>
            )}
        </div>
    );
};

export default ProjectCard;