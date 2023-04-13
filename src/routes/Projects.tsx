import useScrollToTop from "../Hooks/useScrollToTop";
import Mainheading from "../components/Mainheading/Mainheading";
import ProjectsList from "../sections/ProjectsList/ProjectsList";

const Projects = () => {
  useScrollToTop();

  return (
    <div className="projects-page">
      <Mainheading>Projects</Mainheading>
      <ProjectsList />
    </div>
  );
};

export default Projects;
