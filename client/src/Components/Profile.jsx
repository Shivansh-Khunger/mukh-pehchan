import React, { useState } from "react";
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};
const Profile = ({ setPicture, picture , setTake}) => {
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setTake(true)

    setPicture(pictureSrc);
  });
  return (
    <div className=" flex flex-col justify-center rounded-md items-center space-y-2 ">
      <div className=" w-fit h-fit ">
        {picture == "" ? (
          <Webcam
            className=" rounded-md"
            audio={false}
            height={100 + "%"}
            ref={webcamRef}
            width={100 + "%"}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div className=" w-full text-lg flex justify-center ">
        {picture != "" ? (
          <div className=" flex  justify-between w-full">
            <button
              className=" px-2 py-1 rounded-md bg-red-500 text-white"
              onClick={(e) => {
                e.preventDefault();
                setPicture("");
              }}
            >
              Retake
            </button>
            <button className=" bg-green-500 text-white rounded-md  px-2 py-1" onClick={()=>{setTake(false)}}>

              Save
            </button>
          </div>
        ) : (
          <div className=" filter drop-shadow-lg shadow-red-400 w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <button
              className=" w-[70%] h-[70%] rounded-full shadow-lg  bg-red-500"
              onClick={(e) => {
                e.preventDefault();
                capture();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
