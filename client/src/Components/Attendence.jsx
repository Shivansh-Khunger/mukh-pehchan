import Forms from "./Forms";
import Input from "./Input";
import { useEffect, useRef, useState } from "react";
import Profile from "./Profile";
import ProfilePic from "../ProfilePic";
import axios from "axios";

import {
  Link,
  NavLink,
  Navigate,
  useNavigate,
  useNavigation,
} from "react-router-dom";

function Attendence() {
  const [name, setName] = useState("");
  const [pass, setPassword] = useState("");
  const [take, setTake] = useState(false);
  const [picture, setPicture] = useState("");
  const [done, setDone] = useState(-1);

  const navigate = useNavigate();

  function isValid() {
    axios.post("https://www.usr.roohpehchan.co/st/login", {
      staffEmail: name,
      staffPassword: pass,
    }).then((res) => {
      if (res.data.purposeCompleted) {
        alert("you are logged in.");
        navigate("/x", { replace: true });
      }
    });
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gray-800 ">
      <div className="flex items-center text-white mb-9 gap-x-2">
        <NavLink className="mb-1 text-2xl font-semibold text-white " to={"/"}>
          Register Student
        </NavLink>
        <p className="text-4xl font-semibold ">/</p>
        <NavLink
          className="mb-1 text-2xl font-semibold text-white hover:font-bold"
          to={"/a"}
        >
          Teacher Login
        </NavLink>
      </div>

      {!take && (
        <Forms>
          <div className="flex items-center gap-x-1">
            <p className="font-mono text-3xl font-semibold tracking-widest text-center text-white to-white">
              Upload Attendence
            </p>
          </div>

          <div>
            <Input
              data={name}
              label={"E-mail "}
              setData={setName}
              type={"text"}
            />
            {done === 0 && (
              <p className="mb-1 text-sm text-red-500 ">**wrong input</p>
            )}
            <Input
              data={pass}
              label={"Password"}
              setData={setPassword}
              type={"text"}
            />
            {done === 0 && (
              <p className="mb-1 text-sm text-red-500 ">**wrong input</p>
            )}
            {/* <Input data={roll} label={"Roll No "} setData={setRollNo} type={"text"} />
            {done === 1 && (
              <p className="mb-1 text-sm text-red-500 ">**wrong input</p>
            )} */}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              isValid();
            }}
            className="px-3 py-2 tracking-wider text-gray-600 transition-all duration-150 bg-white rounded-md hover:shadow-xl hover:shadow-white/10 w-full justify-center"
          >
            SUBMIT
          </button>
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

export default Attendence;
