// src/Projects.js
import React from 'react';

const projects = [
    {
        name: 'Pythonized Predictive Purchases',
        description: 'Developed a decision tree classifier to predict customer purchases using demographic and behavioral data. Utilized Python, Scikit-learn, Pandas, NumPy, and Jupyter Notebook for project development and analysis. Evaluated model performance using metrics such as accuracy, precision, and recall.',
        link: 'https://github.com/harshithapb/Pythonized-Predictive-Purchases.git'
    },
    {
        name: 'House Prediction System',
        description: 'Developed a ML model for house price prediction using Python, TensorFlow, and Scikit-Learn. Implemented linear regression to show dependencies among labels and features, using mean squared error as the loss function and Stochastic Gradient Descent as the optimizer.',
        link: 'https://github.com/harshithapb/House-Prediction-System.git'
    },
    {
        name: 'TaskTimerList',
        description: 'Created a list-taking website with integrated stopwatch timers and task list duplication. The frontend is crafted using HTML, CSS, and JavaScript, while backend functionality is powered by Node.js with Express.js.',
        link: 'https://github.com/harshithapb/TaskListTimer.git'
    },
    {
        name: 'MyPortfolio',
        description: 'Crafted a dynamic portfolio highlighting my achievements and projects. Leveraged React for creating interactive user interfaces and Bootstrap CSS for seamless styling. Ensured responsive design and smooth navigation for enhanced user experience.',
        link: 'https://github.com/harshithapb/MyPortfolio.git'
    }
];

const Projects = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center">Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        {project.name}
                                    </a>
                                </h5>
                                <p className="card-text">{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
