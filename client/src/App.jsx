import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Forms from "./Components/Forms";
import Input from "./Components/Input";
import { useEffect, useRef, useState } from "react";
import Profile from "./Components/Profile";
import ProfilePic from "./ProfilePic";

import * as faceapi from "face-api.js";

function App() {
  const [name, setName] = useState("");
  const [roll, setRollNo] = useState("");
  const [grpNo, setGrpNo] = useState("");
  const [take, setTake] = useState(false);
  const [picture, setPicture] = useState("");
  const [done, setDone] = useState(-1);
  const id = useRef(null);

  async function loadModels() {
    await faceapi.nets.tinyFaceDetector.loadFromUri("/");
    await faceapi.nets.faceLandmark68Net.loadFromUri("/");
    await faceapi.nets.faceRecognitionNet.loadFromUri("/");
  }

  loadModels();

  async function detectFace() {
    console.log("here");
    const detections1 = await faceapi
      .detectSingleFace(id.current)
      .withFaceLandmarks()
      .withFaceExpressions()
      .withFaceDescriptor();

    console.log(detections1);
  }

  useEffect(() => {
    console.log(id.current);
  }, []);

  function isValid() {
    if (name.length === 0) {
      setDone(0);
      return;
    }
    if (roll.length === 0) {
      setDone(1);
      return;
    }
    var i = 0;
    for (i = 0; i < roll.length; i++) {
      if (roll[i] < "0" || roll[i] > "9") {
        setDone(1);
        return;
      }
    }
    if (picture === "") {
      setDone(2);
      return;
    }

    setDone(-1);
  }

  return (
    <div className=" flex w-screen h-screen    overflow-hidden  justify-center items-center bg-gray-800 ">
      {!take && (
        <Forms>
          <p className=" to-white text-white font-mono text-center text-3xl font-semibold tracking-widest">
            Register Yourself
          </p>
          <div>
            <Input label={"Name "} setData={setName} type={"text"} />
            {done === 0 && (
              <p className=" text-red-500 text-sm mb-1">**wrong input</p>
            )}
            <Input label={"Roll No "} setData={setRollNo} type={"text"} />
            {done === 1 && (
              <p className=" text-red-500 text-sm mb-1">**wrong input</p>
            )}

            <label className=" text-white p-2 rounded-md font-bold">
              Group No
            </label>
            <select
              onChange={(e) => {
                setGrpNo(e.target.value);
              }}
              className=" w-[20%] outline-none rounded-md"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div className=" flex justify-center">
            {picture === "" ? (
              <div className=" flex flex-col justify-between items-center">
                <ProfilePic />
                {done === 2 && <p className=" text-red-500 ">**input image</p>}
              </div>
            ) : (
              <img
                ref={id}
                className=" w-52 h-52 rounded-full shadow-2xl"
                src={picture}
              />
            )}
            {}
          </div>
          <div className=" flex justify-between">
            <button
              onClick={() => {
                setTake(true);
              }}
              className="px-3 hover:shadow-xl hover:shadow-white/10 transition-all duration-150 py-2 rounded-md bg-gray-700 w-fit text-gray-300 tracking-wider"
            >
              Take Photo
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                isValid();
                detectFace();
              }}
              className=" px-3 hover:shadow-xl hover:shadow-white/10 transition-all duration-150 py-2 rounded-md bg-white w-fit text-gray-600 tracking-wider"
            >
              SUBMIT
            </button>
          </div>
        </Forms>
      )}
      {take && (
        <div className=" w-fit h-fit rounded-md shadow-xl p-4 bg-gray-600">
          <Profile
            setPicture={setPicture}
            picture={picture}
            setTake={setTake}
          />
        </div>
      )}
    </div>
  );
}

export default App;
