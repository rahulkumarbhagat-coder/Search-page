import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Results from "./components/Result";
import Search from "./components/Search";
import { data } from "./data";
import { motion } from "framer-motion";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResults = data.filter((item) => {
    const matchedSearch = item.title
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
    const matchedCategory =
      selectedCategory === "All" || selectedCategory === item.category;
    return matchedSearch && matchedCategory;
  });

  return (
    <div className="app">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, type: "spring", stiffness: 200 },
        }}
      >
        Developer's Blog
      </motion.h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Buttons
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Results results={filteredResults} />
    </div>
  );
};

export default App;
