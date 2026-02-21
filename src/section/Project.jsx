import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectForm from "../components/ProjectForm.jsx"; 

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        languages: "",
        details: "",
        liveLink: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.languages && formData.details) {
            setProjects(prev => [...prev, { ...formData, id: Date.now() }]);
            setFormData({
                name: "",
                languages: "",
                details: "",
                liveLink: ""
            });
            setShowForm(false);
        }
    };

    const handleDelete = (id) => {
        setProjects(prev => prev.filter(project => project.id !== id));
    };

    const handleCancel = () => {
        setShowForm(false);
        setFormData({
            name: "",
            languages: "",
            details: "",
            liveLink: ""
        });
    };

    return (
        <section id="work" className="relative c-spacing m-10 p-4 section-animate min-h-screen">
            <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-5 p-5 h-1px w-full">
                <h2 className="text-xl font-bold text-white ml-20">
                    My Selected Projects
                </h2>
            </div>
            
            <div className="mt-8">
                {!showForm && (
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-neutral-700 hover:bg-neutral-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300 mb-6 ml-165 mt-10"
                    >
                        Add Your Project
                    </button>
                )}

                <ProjectForm
                    formData={formData}
                    onInputChange={handleInputChange}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                    isVisible={showForm}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onDelete={handleDelete}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Project;