import Form from "../Components/Form";
import Input from "../Components/Input";
import ProfileIcon from "../Components/ProfileIcon";
import { useState, useEffect } from "react";
import clsx from 'clsx';

function Details({ setClickPic }) {
  let groups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [landAnimDone,setLandAnimDone] = useState(false);

  const inputVarClasses = clsx({"animate-fade-up animate-once animate-duration-[1100ms] animate-ease-in":!landAnimDone,"hover:translate-y-4 transition-all ease-in-out":landAnimDone});
  const inputVarClasses2 = clsx({"animate-fade-up animate-once animate-duration-[1200ms] animate-ease-in":!landAnimDone,"hover:translate-y-4 transition-all ease-in-out":landAnimDone});

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLandAnimDone(true);
    },1500)
  },[])

  return (
      <Form>
        <p className="text-3xl font-semibold w-full flex justify-center">Details</p>

          <Input placeHolder="Name" className={"px-3 py-3 my-2 rounded-md outline-none border-black border-2 " + inputVarClasses}/>
        <Input placeHolder="Roll No" className={"px-3 py-3 my-2 rounded-md outline-none border-black border-2" + inputVarClasses2}/>
        <div className=" flex h-full justify-between flex-col items-start">
          <div className=" w-fit rounded-md border border-black overflow-hidden px-2 py-1 ">
            Grp No :
            <select className=" outline-none ">
              {groups.map((grpNo) => (
                <option>{grpNo}</option>
              ))}
            </select>
          </div>
          <ProfileIcon setClickPic={setClickPic} />
          <input
            className=" mx-auto text-lg w-[60%] rounded-md bg-black text-white px-2 py-1"
            type="submit"
          />
        </div>
      </Form>
  );
}
export default Details;
