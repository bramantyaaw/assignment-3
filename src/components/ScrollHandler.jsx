import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");

    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ block: "end", behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return null;
};

export default ScrollHandler;
