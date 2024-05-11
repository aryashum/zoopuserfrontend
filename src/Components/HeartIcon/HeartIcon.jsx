import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';

const HeartIcon = () => {
  const [isLiked, setIsLiked] = useState(false);
  

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <AiFillHeart
      className={`h-[34px] w-[26px] absolute top-4 right-4 cursor-pointer ${
        isLiked
          ? 'text-red-600 transform scale-110 transition-transform duration-400'
          : 'text-white'
      } transition-colors duration-300`}
      onClick={handleClick}
      
    />
  );
};

export default HeartIcon;
