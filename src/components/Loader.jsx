import { useState, useEffect } from "react";
import { LoaderStyled } from "../styled-components/iconsLoader.style";

const ArrayDisplay = ({ arr }) => {
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
};

const Loader = () => {
  const listOfIcons = [":)", ":D", ":Q", ":P", ":O", ":*"];

  return (
    <LoaderStyled>
      <h1>Loading. . .</h1>
      <ArrayDisplay arr={listOfIcons} />
    </LoaderStyled>
  );
};

export default Loader;
