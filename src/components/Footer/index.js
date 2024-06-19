import React, { useState, useRef } from "react";
import { links } from "../../assets/images-links";
import "./styles.css";
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';

function Filter() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 100; // Customize this to scroll more or less
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="filter-container">
      
      <div className="filter-div" ref={scrollContainerRef}>
        {links.map((item, i) => (
          <div
            key={i}
            className={`links-box ${i === selectedFilter ? "selected-box" : ""}`}
            onClick={() => setSelectedFilter(i)}
          >
            <img src={item.imgSrc} className="links-img" alt="" />
            <p className={`links-label ${i === selectedFilter ? "selected-label" : ""}`}>
              {item.label}
            </p>
          </div>
        ))}
      <div className="arrow left" onClick={() => scroll('left')}>
        <NavigateBeforeRoundedIcon fontSize="large" />
      </div>
      <div className="arrow right" onClick={() => scroll('right')}>
        <NavigateNextRoundedIcon fontSize="large" />
      </div>
      </div>
    </div>
  );
}

export default Filter;
