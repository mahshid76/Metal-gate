import styled from "./home.module.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import { useState, useEffect } from "react";
function Home() {
  
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error", error));
  }, []);
  return (
    <>
      <Navbar title="METAL GATES" />
       <div className={styled.container}>
      <div className={styled.Project}>
        {projects.map((project) => (
          <Projects
            key={project.id}
            imageUrl={project.imageUrl}
            description={project.description}
          />
        ))}
      </div>
      </div>


      <Footer />
    </>
  );
}
export default Home;
