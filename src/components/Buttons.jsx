import React from "react";
import { delay, motion } from "framer-motion";

const Buttons = ({ selectedCategory, setSelectedCategory }) => {

  const variants = {
    initial:{ flexGrow:0.5,opacity: 0 },
      animate:{
  
        opacity: 1,
        flexGrow:1,
        transition: { duration: 1, type: "spring", stiffness: 50,staggerChildren:0.2 },
      }
  }
  const categories = ["All", "React", "Node.js", "JavaScript", "TypeScript", "CSS"];

  return (
    <motion.div
      className="filters"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      {categories.map((category) => {
        return (
          <motion.button
            variants={variants}
            key={category}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category);
            }}
          >
            {category}
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default Buttons;
