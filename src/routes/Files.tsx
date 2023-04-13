import useScrollToTop from "../Hooks/useScrollToTop";
import Mainheading from "../components/Mainheading/Mainheading";
import FilesLayout from "../components/FilesLayout/FilesLayout";

const Files = () => {
  useScrollToTop();

  return (
    <div className="files-page">
      <Mainheading>Files</Mainheading>
      <FilesLayout />
    </div>
  );
};

export default Files;
