// src/App.js
import React from 'react';
import Projects from './projects';


function App() {
    return (
        <div className="App d-flex flex-column min-vh-100">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">My Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container mt-5 flex-grow-1">
                <section id="home" className="text-center">
                    <h1 className="display-4">Welcome to My Portfolio</h1>
                    <p className="lead">Here you will find information about my education, projects, skills, and my latest resume.</p>
                </section>
                <section id="resume" className="text-center mt-5">
                    <h2>Resume</h2>
                    <a href="/resume.pdf" target="_blank" className="btn btn-primary">Download my resume</a>
                </section>
                <Projects />
            </div>
            <footer className="bg-dark text-white text-center py-3 mt-auto">
                <p>© 2024 My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
