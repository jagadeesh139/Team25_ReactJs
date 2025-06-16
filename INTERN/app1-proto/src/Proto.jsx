import React, { useState } from "react";
import "./index.css"

function Proto() {
  const [showContact, setShowContact] = useState(false);

  const toggleContactForm = () => {
    setShowContact(!showContact);
  };

  return (
    <div style={{ margin: 0 }}>

      <header>
        <h1>Hi, I'm Jagadeesh 👋</h1>
        <p>Full Stack Developer | React, Redux, JavaScript</p>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <p>
          Motivated and detail-oriented Full Stack Developer with hands-on experience in front-end technologies like React.js, Redux, HTML5, CSS3, and JavaScript.
          Skilled in building responsive web applications, integrating RESTful APIs, and using tools like Git and VS Code.
          Committed to continuous learning and leveraging AI tools for enhanced productivity.
        </p>
      </section>

      <div className="skills-projects-container">

        <section className="skills">
          <h2>Technical Skills</h2>
          <ul>
            <li>JavaScript, HTML5, CSS3, JSON, Bootstrap</li>
            <li>React.js 18, Redux</li>
            <li>Git, GitHub, VS Code, NPM, Babel</li>
            <li>AJAX, Responsive Design, SEO Principles</li>
            <li>Microsoft Azure, Azure Management, VPN, Networking</li>
            <li>BOM, DOM APIs</li>
          </ul>
        </section>

        <section className="projects">
          <h2>Project: RoomsTonite</h2>
          <div className="project">
            <p>
              <strong>Role:</strong> UI Developer<br />
              <strong>Tech Stack:</strong> HTML5, CSS3, JavaScript, React JS, Redux<br />
              <strong>Description:</strong> RoomsTonite is a smart room selection platform tailored to users' preferences. I developed a user-friendly and responsive interface, collaborated with back-end developers, integrated RESTful APIs, and optimized the front-end for performance and SEO.
            </p>
          </div>
        </section>
      </div>

      <section>
        <h2>Links</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/jagadeesh-m-762b80238" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/jagadeesh139" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>Email: <a href="mailto:mjagadeesh0112@gmail.com">mjagadeesh0112@gmail.com</a></li>
        </ul>
      </section>

      <section>
        <h2>Contact Me</h2>
        <button onClick={toggleContactForm}>
          {showContact ? "Hide Contact Form" : "Show Contact Form"}
        </button>
        {showContact && (
          <form style={{ marginTop: "1rem" }}>
            <label>Name:</label><br />
            <input type="text" name="name" /><br />
            <label>Email:</label><br />
            <input type="email" name="email" /><br />
            <label>Message:</label><br />
            <textarea name="message"></textarea><br />
            <button type="submit">Send</button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", color: "#777" }}>
        &copy; 2025 Jagadeesh
      </footer>
    </div>
  );
}
export default Proto;
