import React, { useRef, useState } from 'react';
import './CustomScroll.css'; // Import your CSS file for styling

const CustomScroll = ({ children }) => {
  const containerRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollX(containerRef.current.scrollLeft);
    }
  };

  return (
    <div className="custom-scroll-container" onScroll={handleScroll} ref={containerRef}>
      <div className="custom-scroll-content">
        {children}
      </div>
      <div className="scrollbar" style={{ width: `${scrollX}px` }}></div>
    </div>
  );
};

export default CustomScroll;
