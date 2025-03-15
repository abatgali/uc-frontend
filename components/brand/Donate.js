// Import necessary React and CSS module
import React, { useState } from 'react';
import styles from '@/app/styles/DonateButton.module.css'; // Assume we have a corresponding CSS module file

// Define the DonateButton component
const DonateButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Event handlers for mouse enter and leave
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
      <button
        className={`${styles.donateButton} ${isHovered ? styles.hovered : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Enter ⚽
      </button>
  );
};

// Export the component
export default DonateButton;
