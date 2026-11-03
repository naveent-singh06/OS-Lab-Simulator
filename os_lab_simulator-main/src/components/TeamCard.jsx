import "../styles/TeamCard.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const TeamCard = ({ name, image, id }) => {
  return (
    <div className="big-box">
      <div className="maincontainer maincontainer-1">
        <div className="back">
          <h2>About Me & Project</h2>
          <p>
            Hello! I'm Navneet Singh, a passionate technology enthusiast
            interested in software development, web development and
            Operating System concepts. I worked on this OS Lab Simulator
            project to make complex operating system algorithms easier
            to understand through interactive visualizations.
          </p>
        </div>

        <div className="front front-1">
          <div className="image">
            <img src={image} alt="Navneet Singh" />
            <h2>{name || "Navneet Singh"}</h2>
          </div>
        </div>
      </div>

      <div className="container container-1">
        <div className="card">
          <div className="face bg-face face1">
            <h1>Let's Connect</h1>
          </div>

          <div className="face face2">
            <div className="c1 content">
              <h3>Follow Me</h3>

              <div className="social-link">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/naveent-singh06"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="mailto:YOUR_EMAIL@gmail.com"
                  aria-label="Email"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;