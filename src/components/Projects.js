import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>ASTROLOGER FLOW DISTRIBUTION</h3>
          <h5>JavaScript, NodeJs, ExpressJs</h5>
          <p>
            <ul>
                <li>Developed a Node.js application to manage user allocations among astrologers, ensuring fair distribution.</li>
                <li>Implemented RESTful API endpoints for user and astrologer management, focusing on customization and efficiency.</li>
            </ul>
          </p>
        </div>
        <div className="project-item">
          <h3>STUDENT PROGRESS TRACKER</h3>
          <h5>Python, Flask, MongoDB</h5>
          <p>
            <ul>
                <li>Manages studentreports in educational institutions, allowing creation,
storage, and retrieval of academic records.</li>
                <li>Features secure, user-friendly interface for accessing and analyzing
student performance data.</li>
            </ul>
          </p>
        </div>
        <div className="project-item">
          <h3>WEB CALCULATOR</h3>
          <h5>Html, Css, JavaScript, ReactJs</h5>
          <p>
            <ul>
                <li>Sleek web calculator: Offers modern design and user-friendly interface.</li>
                <li>Performs arithmetic operations with ease, providing intuitive
interaction and clear display.</li>
            </ul>
          </p>
        </div>
        <div className="project-item">
          <h3>GITHUB PROFILE EXPLORER</h3>
          <h5>Html, Css, JavaScript, ReactJs</h5>
          <p>
            <ul>
                <li>React app: Fetches and efficiently displays GitHub user profiles.</li>
                <li>Provides streamlined user experience for accessing and viewing GitHub
profiles.</li>
            </ul>
          </p>
        </div>
        <div className="project-item">
          <h3>STUDENT DATA HUB</h3>
          <h5>Core Java, Collection Framework</h5>
          <p>
            <ul>
                <li>Java console app: Manages student database with features like adding,
viewing, searching, and computing average marks.</li>
                <li>Streamlines tasks for effortless management of student information in a
console-based environment.</li>
            </ul>
          </p>
        </div>
        <div className="project-item">
          <h3>TECHISPOT</h3>
          <h5>Html, Css, JavaScript, ReactJs</h5>
          <p>
            <ul>
                <li>Techispot is a community-driven platform for engineers, offering connections, insights, and tech updates.</li>
                <li>Features include tech news, memes, and curated resources forlearning and growth.</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
