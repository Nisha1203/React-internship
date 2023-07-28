import React, { useState, useEffect } from "react";
import Background from "../Images/background.png";
import Back from "../Images/Back1.png";

const BackgroundImage = () => {
  const [showBackImage, setShowBackImage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Set the threshold below which the back image should be hidden (adjust as needed)
      const threshold = 200;
      setShowBackImage(scrollY <= threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <img
          src={Background}
          alt="background"
          className="max-w-full h-auto mt-14"
        />
      </div>
      {showBackImage && (
        <img
          src={Back}
          alt="background1"
          className="max-w-full h-auto absolute top-0 left-0 mt-21 ml-14 z-0 md:z-10 hidden md:flex"
          style={{
            marginTop: "12rem",
          }}
        />
      )}
    </div>
  );
};

export default BackgroundImage;
