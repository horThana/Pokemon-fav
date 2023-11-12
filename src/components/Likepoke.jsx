import React, {useState} from 'react';
import {FaRegHeart} from "react-icons/fa";

const likepoke = () => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <button onClick={handleLike }>
      {like ? <FaRegHeart style={{ color : "red"}} /> : <FaRegHeart /> }
    </button>
  );
};

export default likepoke;
