import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    document.querySelector(".page")?.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
};

export default useScrollToTop;
