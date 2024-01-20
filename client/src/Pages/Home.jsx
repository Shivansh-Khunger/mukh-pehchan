
import { useState } from "react";
import Details from "../Components/Details";
import AddImage from "../Components/AddImage";

function Home() {
  const [picture, setPicture] = useState("");
  const [take, setTake] = useState(false);
  const [clickPic, setClickPic] = useState(false);


  return (
      <div className=" flex justify-center items-center w-screen h-screen bg-black overflow-hidden">
        {!clickPic && (
            <Details setClickPic={setClickPic} />
        )}
        {clickPic && (
          <AddImage
            picture={picture}
            setPicture={setPicture}
            setTake={setTake}
            className="border-white border-2 p-4 "
          />
        )}
      </div>
  );
}
export default Home;
