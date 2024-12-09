import React, { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";

const Results = ({ results }) => {
  const [blogs, setBlogs] = useState([]);

  //Animation for each result seperately
  const [parentScope, animate] = useAnimate();

  useEffect(() => {
    if (blogs.length > 0) {
      animate(
        ".result-item",
        { x: 0, opacity: 1 },
        {  delay:stagger(0.2), type: "tween", ease: "easeInOut" }
      );
    }
  }, [blogs]);

  useEffect(() => {
    if (results.length > 0) {
      setBlogs(results.slice(0, 5));
      setPage(2);
    }
  }, [results]);

  const [page, setPage] = useState(2);
  const pageSize = 5;
  const fetchData = () => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex < results.length) {
      setBlogs((prevBlog) => [
        ...prevBlog,
        ...results.slice(startIndex, endIndex),
      ]);
      setPage(page + 1);
    }
  };

  return (
    <InfiniteScroll
      dataLength={blogs.length}
      next={fetchData}
      hasMore={blogs.length < results.length}
      loader={<h3>Loading...</h3>}
    >
      <motion.div className="results" ref={parentScope}>
        {results.length > 0 ? (
          blogs.map((item) => (
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              key={item.id}
              className="result-item"
            >
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <span className="category">{item.category}</span>
            </motion.div>
          ))
        ) : (
          <motion.p>No Blog Found</motion.p>
        )}
      </motion.div>
    </InfiniteScroll>
  );
};

export default Results;
