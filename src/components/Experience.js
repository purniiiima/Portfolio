import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className='head'>Experience</h2>
      <div className="experience-item">
        <h3>Software Developer Intern</h3>
        <p>FDX INTERNSHIP</p>
        <p>Jan 2024 - Apr 2024 | Remote/Bangalore, Karnataka</p>
        <p><ul>
                <li>Created Flask APIs for WhatsappCloud messaging.</li>
                <li>Developed a userinterface with Appsmith for scheduling Whatsapp messages.</li>
                <li>Utilized AWS Lambda functions for backend operations.</li>
                <li>Implemented task scheduling using EventBridge Scheduler .</li>
            </ul></p>
      </div>
      <div className="experience-item">
        <h3>Web Developer Intern</h3>
        <p>CongnoRise Infotech</p>
        <p>Mar 2024 - Apr 2024 | Remote</p>
        <p>
            <ul>
                <li>Created Flask APIs for WhatsappCloud messaging.</li>
                <li>Developed a userinterface with Appsmith for scheduling Whatsapp messages.</li>
                <li>Utilized AWS Lambda functions for backend operations.</li>
                <li>Implemented task scheduling using EventBridge Scheduler .</li>
            </ul>
        </p>
      </div>
    </section>
  );
};

export default Experience;
