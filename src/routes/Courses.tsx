import useScrollToTop from "../Hooks/useScrollToTop";
import CoursesList from "../sections/CoursesList/CoursesList";
import Mainheading from "../components/Mainheading/Mainheading";

const Courses = () => {
  useScrollToTop();

  return (
    <div className="courses-page">
      <Mainheading>Courses</Mainheading>
      <CoursesList />
    </div>
  );
};

export default Courses;
