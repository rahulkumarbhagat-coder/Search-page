import React from "react";
import { motion } from "framer-motion";

const Results = ({ results }) => {
  const variants = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
        type: "spring",
        stiffness: 50,
        dampning: 50,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="results"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      {results.length > 0 ? (
        results.map((item) => (
            <motion.div
              key={item.id}
              className="result-item"
            >
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <span className="category">{item.category}</span>
            </motion.div>
          )
        )
      ) : (
        <motion.p>No Blog Found</motion.p>
      )}
    </motion.div>
  );
};

export default Results;
