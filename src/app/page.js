"use client"

import React, { useEffect, useState } from "react";

const ScreenOrientaion = () => {
  const [orientation, setOrientation] = useState("");
  useEffect(() => {

    // Function to update the orientation state
    function updateOrientation() {
      setOrientation(window.screen.orientation.type);
    }

    // Initial update of the orientation state
    updateOrientation();

    // Add an event listener for orientation change
    window.addEventListener("orientationchange", updateOrientation);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("orientationchange", updateOrientation);
    };
  }, [orientation]);
  return (
    <>
      {orientation === "landscape-primary" ||
      orientation === "landscape-secondary" ? (
        <div>"Landscape View"</div>
      ) : (
        <div>"Please rotate your phone to view in landscape"</div>
      )}
    </>
  );
};

export default ScreenOrientaion;
