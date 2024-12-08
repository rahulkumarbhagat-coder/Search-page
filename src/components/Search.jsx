import React from "react";
import { motion } from "framer-motion";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, type: "spring", stiffness:50},
      }}
    >
      <input
        type="text"
        placeholder="Search your topic"
        className="search-box"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </motion.div>
  );
};

export default Search;
