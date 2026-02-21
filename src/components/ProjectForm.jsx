import React from 'react';

const ProjectForm = ({ 
    formData, 
    onInputChange, 
    onSubmit, 
    onCancel, 
    isVisible 
}) => {
    if (!isVisible) return null;

    return (
        <div className="bg-neutral-800 bg-opacity-70 p-6 rounded-lg mb-6 ml-20 transition-all duration-300 ease-in-out transform   hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-500/50">
            <h3 className="text-lg font-semibold text-white mb-4">Add New Project</h3>
            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Project Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={onInputChange}
                        className="w-full px-3 py-2 bg-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Programming Languages
                    </label>
                    <input
                        type="text"
                        name="languages"
                        value={formData.languages}
                        onChange={onInputChange}
                        placeholder="e.g., React, Node.js, MongoDB"
                        className="w-full px-3 py-2 bg-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Project Details
                    </label>
                    <textarea
                        name="details"
                        value={formData.details}
                        onChange={onInputChange}
                        rows="3"
                        className="w-full px-3 py-2 bg-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Live Link (Optional)
                    </label>
                    <input
                        type="url"
                        name="liveLink"
                        value={formData.liveLink}
                        onChange={onInputChange}
                        placeholder="https://example.com"
                        className="w-full px-3 py-2 bg-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    />
                </div>
                <div className="flex space-x-3">
                    <button
                        type="submit"
                        className="bg-neutral-600 hover:bg-neutral-500 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                    >
                        Add Project
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-600 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;