import './style.css';
import React, { useState } from 'react';

export const JokeLikes = () => {
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);

  const handleClickUp = () => {
    setUpLikes(upLikes + 1);
  };

  const handleClickDown = () => {
    setDownLikes(downLikes + 1);
  };

  return (
    <div className="joke__likes">
      <button
        id="btn-up"
        className="btn-like btn-like--up"
        onClick={handleClickUp}
      ></button>
      <span id="likes-up" className="likes-count likes-count--up">
        {upLikes}
      </span>
      <button
        id="btn-down"
        className="btn-like btn-like--down"
        onClick={handleClickDown}
      ></button>
      <span id="likes-down" className="likes-count likes-count--down">
        {downLikes}
      </span>
    </div>
  );
};
