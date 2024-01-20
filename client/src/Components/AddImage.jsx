import { motion } from "framer-motion";
import Profile from "./Profile";

function AddImage({picture , setPicture , setTake }){
    return (

        <motion.div  className=" w-full h-full flex justify-center items-center bg-black  rounded-md">
            <div className=" w-fit h-fit p-3 rounded-md bg-white">
            <Profile picture={picture} setPicture={setPicture} setTake={setTake}/>
            </div>

        </motion.div>
    )
}
export default AddImage;
