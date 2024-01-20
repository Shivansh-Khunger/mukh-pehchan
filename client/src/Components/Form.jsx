import { motion } from "framer-motion";

function Form({ children }) {
  return (
    <form
      className=" border border-white bg-white rounded-lg  p-8 w-[50vh] flex flex-col gap-y-4 animate-fade-up animate-once animate-duration-[800ms] animate-ease-in "
    >
      {children}
    </form>
  );
}
export default Form;
