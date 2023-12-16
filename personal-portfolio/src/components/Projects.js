import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.png";
import projImg2 from "../assets/img/img2.png";
import projImg3 from "../assets/img/img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import './animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Food App",
      description: "MERN Stack App",
      imgUrl: projImg1,
      siteUrl: "https://food-app-delta-six.vercel.app/",
    },
    {
      title: "Portfolio",
      description: "FrontEnd Project",
      imgUrl: projImg2,
      siteUrl: "https://shreyanshraj.vercel.app/",
    },
    {
      title: "Alumni Website",
      description: "College Website",
      imgUrl: projImg3,
      siteUrl: "https://github.com/ShreyanshRaj22/Alumni-Cell-New",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col >
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My Projects are comprised of FrontEnd, BackEnd as well as Full Stack technologies. I generally make RESTful APIs and work with technologies such as BootStrap, TailWindCSS, ChartJS and React as frontend. Most projects are hosted on vercel.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                  
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
