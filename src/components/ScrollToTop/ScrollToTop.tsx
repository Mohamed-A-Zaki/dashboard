import "./ScrollToTop.scss";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const Listener = () => setShow(window.scrollY >= 700);
    window.addEventListener("scroll", Listener);
    return () => window.removeEventListener("scroll", Listener);
  });

  return (
    <React.Fragment>
      {show && (
        <div
          onClick={() => window.scrollTo({ top: 0 })}
          className="scroll-to-top position-fixed bottom-0 end-0 m-4 text-white rounded-circle d-flex align-items-center justify-content-center"
        >
          <AiOutlineArrowUp className="fs-4" />
        </div>
      )}
    </React.Fragment>
  );
};

export default ScrollToTop;
