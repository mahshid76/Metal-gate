import Styled from "./projects.module.css";
function Projects({ imageUrl, description }) {
  return (

    <div className={Styled.card}>
      <img src={imageUrl} alt="project preview" className="styled.image" />
      <p className={Styled.description}>{description}</p>
    </div>
  );
}

export default Projects;
