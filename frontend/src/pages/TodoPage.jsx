import { motion } from "framer-motion";
import Todos from "../components/Todos";
import DisplayTodos from "../components/DisplayTodos";

const TodoPage = () => {
  
  return (
    <div className="flex flex-col bg-black h-screen pt-20 font-rock text-[#222] overflow-hidden">
      <motion.h1
        className="text-4xl font-bold mt-2 text-white mx-auto"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
      </div>
  );
};

export default TodoPage;
