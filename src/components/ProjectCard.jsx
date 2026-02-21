import React from 'react';

const ProjectCard = ({ project, onDelete, index }) => {
    return (
        <div
            className="bg-neutral-800 bg-opacity-70 p-6 rounded-lg relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-500/50 ml-10"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <button
                onClick={() => onDelete(project.id)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-400 transition-colors duration-300"
                aria-label="Delete project"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
            <div className="mb-3">
                <span className="text-sm text-gray-400">Technologies:</span>
                <p className="text-neutral-300">{project.languages}</p>
            </div>
            <p className="text-gray-300 mb-4">{project.details}</p>
            {project.liveLink && (
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-neutral-700 hover:bg-neutral-600 text-white text-sm font-medium py-1 px-3 rounded transition-colors duration-300"
                >
                    View Live
                </a>
            )}
        </div>
    );
};

export default ProjectCard;