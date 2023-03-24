import { useState, useEffect } from "react";
import { LoaderStyled } from "../styled-components/iconsLoader.style";

/* const ArrayDisplay = ({ arr }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const itervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 1000);

    return () => {
      clearInterval(itervalId);
    };
  }, [arr]);

  return <div>{arr[currentIndex]}</div>;
}; */

const Loader = () => {
  const listOfIcons = [":)", ":D", ":Q", ":P", ":O", ":*"];

  return (
    <LoaderStyled>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
    </LoaderStyled>
  );
};

export default Loader;
