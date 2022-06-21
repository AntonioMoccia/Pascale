import { useState, useEffect } from "react";

function useResizer() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 1023) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    });
  }, []);
  return {
    isMobile,
  };
}

export default useResizer;
