import { useEffect, useState } from "react";

const useUpdateWindowDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function updateWindowDimensions() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);
  

  return { width };
};

export default useUpdateWindowDimensions;
