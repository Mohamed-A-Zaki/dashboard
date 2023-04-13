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
        <AiOutlineArrowUp
          size={40}
          onClick={() => window.scrollTo({ top: 0 })}
          className="scroll-to-top position-fixed bottom-0 p-2 m-4 text-white rounded-circle"
        />
      )}
    </React.Fragment>
  );
};

export default ScrollToTop;
