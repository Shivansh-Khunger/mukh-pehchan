import Forms from "./Components/Forms";
import Input from "./Components/Input";
import { useEffect, useRef, useState } from "react";
import Profile from "./Components/Profile";
import ProfilePic from "./ProfilePic";
import axios from "axios";

import { Link, NavLink } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [roll, setRollNo] = useState("");
  const [grpNo, setGrpNo] = useState("");
  const [take, setTake] = useState(false);
  const [picture, setPicture] = useState("");
  const [done, setDone] = useState(-1);
  const [student, setStudent] = useState(true);
  const id = useRef(null);

  async function isValid() {
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

    await axios
      .post("https://www.img.roohpehchan.co/up/one", {
        triggerStuRollNo: roll,
      })
      .then((res) => {
        if (res.data.valUpdated) {
          alert("you are registered.");
          setName("");
          setRollNo("");
          setPicture("");
          setTake(false);
        }
      });

    setDone(-1);
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gray-800 ">
      <div className="flex items-center text-white mb-9 gap-x-2">
        <NavLink className="mb-1 text-2xl font-semibold text-white" to={"/"}>
          Register Student
        </NavLink>
        <p className="text-4xl font-semibold ">/</p>
        <NavLink className="mb-1 text-2xl font-semibold text-white" to={"a"}>
          Upload Attendence
        </NavLink>
      </div>

      {!take && (
        <Forms>
          <div className="flex items-center gap-x-1">
            <p className="font-mono text-3xl font-semibold tracking-widest text-center text-white to-white">
              Register Student
            </p>
          </div>

          <div>
            <Input
              data={name}
              label={"Name "}
              setData={setName}
              type={"text"}
            />
            {done === 0 && (
              <p className="mb-1 text-sm text-red-500 ">**wrong input</p>
            )}
            <Input
              data={roll}
              label={"Roll No "}
              setData={setRollNo}
              type={"text"}
            />
            {done === 1 && (
              <p className="mb-1 text-sm text-red-500 ">**wrong input</p>
            )}

            <label className="p-2 font-bold text-white rounded-md ">
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
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
            </select>
          </div>
          <div className="flex justify-center ">
            {picture === "" ? (
              <div className="flex flex-col items-center justify-between ">
                <ProfilePic />
                {done === 2 && <p className="text-red-500 ">**input image</p>}
              </div>
            ) : (
              <img
                ref={id}
                className="rounded-full shadow-2xl w-52 h-52"
                src={picture}
              />
            )}
            {}
          </div>
          <div className="flex justify-between ">
            <button
              onClick={() => {
                setTake(true);
              }}
              className="px-3 py-2 tracking-wider text-gray-300 transition-all duration-150 bg-gray-700 rounded-md hover:shadow-xl hover:shadow-white/10 w-fit"
            >
              Take Photo
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                isValid();
              }}
              className="px-3 py-2 tracking-wider text-gray-600 transition-all duration-150 bg-white rounded-md hover:shadow-xl hover:shadow-white/10 w-fit"
            >
              SUBMIT
            </button>
          </div>
        </Forms>
      )}
      {take && (
        <div className="p-4 bg-gray-600 rounded-md shadow-xl w-fit h-fit">
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
