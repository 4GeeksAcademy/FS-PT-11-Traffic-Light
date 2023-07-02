import React, { useState, useEffect } from "react";

//create your first component.
const Home = () => {
  let color = "";

  window.onload = function () {
    changeRed;
  };

  useEffect(() => {
    const changeRed = () => {
      setSelectedColor("red");
      setTimeout(() => {
        changeYellow();
      }, 3000);
    };

    const changeYellow = () => {
      setSelectedColor("yellow");
      setTimeout(() => {
        changeGreen();
      }, 3000);
    };

    const changeGreen = () => {
      setSelectedColor("green");
      setTimeout(() => {
        changeRed();
      }, 3000);
    };

    setTimeout(() => {
      changeRed();
    }, 3000);
  }, []);

  const [selectedColor, setSelectedColor] = useState(color);

  return (
    <div className="container">
      <h1 className="text-center mt-5">Trafic Light</h1>
      <p>This trafic light change the color every 3 seconds</p>
      <div className="traficLight">
        <div
          onClick={() => setSelectedColor("red")}
          className={
            "red" + (selectedColor === "red" ? " glowRed" : " opacity")
          }
        ></div>
        <div
          onClick={() => setSelectedColor("yellow")}
          className={
            "yellow" + (selectedColor === "yellow" ? " glowYellow" : " opacity")
          }
        ></div>
        <div
          onClick={() => setSelectedColor("green")}
          className={
            "green" + (selectedColor === "green" ? " glowGreen" : " opacity")
          }
        ></div>
      </div>
      <div className="mt-5">
        {/* <button onClick={document.querySelector} className="butn">
          Add purple color
        </button> */}
      </div>
    </div>
  );
};

export default Home;
