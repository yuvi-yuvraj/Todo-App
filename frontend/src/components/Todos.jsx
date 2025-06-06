import React, { useState } from "react";

import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { addTodos } from "../store/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <div className="flex justify-center mt-6 items-center">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="min-w-14 w-1/3 max-h-12 h-9 border-none rounded-md border-r-2 p-2 align-middle outline-orange-200"
        value={todo}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="ml-2 bg-orange-400 rounded-full w-12 h-12 outline-orange-400 flex justify-center items-center text-2xl font-extrabold shadow-orange-600 shadow-md"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);