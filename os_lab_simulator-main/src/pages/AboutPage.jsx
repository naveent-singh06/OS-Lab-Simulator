import { Nav, TeamCard } from '../components';
import '../styles/About.css';
import navneetImg from '../assets/teamImage/Navneet Singh.jpeg';
import socialImg from '../assets/teamImage/Social.png';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-us-page">
      <div className="title-section">
        <Nav />
        <h1 className="title"></h1>
      </div>

      <div className="parent-div">
        <div className="our-team-container">
          <h1 style={{ color: '#444' }}>Our Team</h1>

          <div className="team">
            <TeamCard
              name="Navneet Singh"
              id="1"
              image={navneetImg}
              social={socialImg}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;