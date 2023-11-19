import { useEffect, useRef, useState, useCallback } from "react";
function useApp() {
  const [scroll, setScroll] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const newScroll = window.scrollY;
      if (newScroll >= 10 && newScroll !== scroll) {
        setScroll(newScroll);
        setBackgroundOpacity(10);
      } else if (newScroll == 0 && scroll !== 0) {
        console.log("check");
        setScroll(0);
        setBackgroundOpacity(0);
      }
    });
  }, [scroll]);
  console.log(backgroundOpacity);
  const navigateToDownload = () => {
    window.location.href = "http://go.delgo.pet";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return {
    state: {
      scroll,
      backgroundOpacity,
    },
    action: {
      navigateToDownload,
    },
  };
}
export default useApp;
