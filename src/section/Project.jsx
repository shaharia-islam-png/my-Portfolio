// pages/Project.jsx

// সব লোগো ইমপোর্ট করুন
import html from "../asset/html.png";
import css from "../asset/css.png";
import js from "../asset/js.gif";
import react from "../asset/react.gif";
import vs from "../asset/vs.png";
import github from "../asset/github.png";
import pbg from "../asset/p1.png";
import pbg2 from "../asset/p2.png";
import pbg3 from "../asset/p3.png";
import pbg4 from "../asset/p4.png";
import pbg5 from "../asset/p5.png";
import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';

const projectsData = [
    {
        id: '1',
        name: 'Food Search webapp',
        techLogos: [
            { src: html, name: 'HTML' },
            { src: css, name: 'CSS' },
            { src: js, name: 'JavaScript' },
            { src: vs, name: 'VS Code' },
            { src: github, name: 'GitHub' }
            
        ],
        details: 'I make a simple Food webapp that fetches meals from TheMealDB based on nationality. by that app we can know the food style of othe country. There have also responsive layout',
        liveLink: 'https://shaharia-islam-png.github.io/food-webapp/',
        imageUrl: pbg
    },
    {
        id: '2',
        name: 'Tic Tac Toe Game',
        techLogos: [
             { src: html, name: 'HTML' },
            { src: css, name: 'CSS' },
            { src: js, name: 'JavaScript' },
            { src: vs, name: 'VS Code' },
            { src: github, name: 'GitHub' }
        ],
        details: 'Experience the classic game like never before. Challenge yourself against an AI with three difficulty levels, or play against a friend on the same device.\n\n a casual player or a competitive strategist, this Tic Tac Toe game offers endless fun and excitement. Play now and see if you can outsmart the AI or your friends!',
        liveLink: 'https://tic-tac-toe-8f.netlify.app/',
        imageUrl: pbg2
    },
    {
        id: '3',
        name: 'University Election Voting System',
        techLogos: [
            { src: html, name: 'HTML' },
            { src: css, name: 'CSS' },
            { src: js, name: 'JavaScript' },
            { src: react, name: 'React' },
            { src: vs, name: 'VS Code' },
            { src: github, name: 'GitHub' }
            
        ],
        details: 'A secure and user-friendly voting system for university elections, built with React and Firebase. they can vote for their preferred candidates, view real-time results, and ensure a transparent election process. Anyone cannot vote more than once, and the age verification system ensures that only eligible voters can participate.',
        liveLink: 'https://university-election-voting.netlify.app/',
        imageUrl: pbg3
    },
    {
        id: '4',
        name: 'TODO List App',
        techLogos: [
            { src: html, name: 'HTML' },
            { src: css, name: 'CSS' },
            { src: js, name: 'JavaScript' },
            { src: react, name: 'React' },
            { src: vs, name: 'VS Code' },
            { src: github, name: 'GitHub' }
            
        ],
        details: 'A simple and intuitive TODO list application built with React and Firebase. Users can add, edit, and delete tasks, mark them as complete, and persist data using Firebase. The app features a clean and responsive design, making it easy to manage tasks on any device. Whether you need to organize your daily to-dos or keep track of long-term projects, this TODO list app has got you covered. Experience seamless task management and stay productive with this user-friendly application.',
        liveLink: 'https://todo-list-app7f.netlify.app/',
        imageUrl: pbg4
    },
    {
        id: '5',
        name: 'BMI Calculator',
        techLogos: [
           { src: html, name: 'HTML' },
            { src: css, name: 'CSS' },
            { src: js, name: 'JavaScript' },
            { src: react, name: 'React' },
            { src: vs, name: 'VS Code' },
            { src: github, name: 'GitHub' }
        ],
        details: ' A simple and user-friendly BMI (Body Mass Index) calculator built with React. Users can input their weight and height to calculate their BMI, which helps them understand their health status. The app provides instant feedback on whether the user is underweight, normal weight, overweight, or obese based on the calculated BMI value. With a clean and responsive design, this BMI calculator is accessible on any device, making it easy for users to monitor their health and make informed lifestyle choices.',
        liveLink: 'https://bmi-calculatorapp4r.netlify.app/',
        imageUrl: pbg5
    }
];

const Project = () => {
    return (
        <section id="work" className="relative min-h-screen p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full mt-5 mb-10 md:mb-20 flex items-center">
                    <h2 className="text-xl font-bold text-white bg-neutral-900 px-4 text-center md:text-left md:ml-20">
                        My Selected Projects
                    </h2>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;