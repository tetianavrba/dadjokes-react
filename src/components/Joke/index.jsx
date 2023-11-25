import './style.css';
import { useState } from 'react';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [upLikes, setUpLikes] = useState(likes);
  const [downLikes, setDownLikes] = useState(dislikes);

  const handleClickUp = () => {
    setUpLikes(upLikes + 1);
  };

  const handleClickDown = () => {
    setDownLikes(downLikes + 1);
  };

  return (
    <>
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} alt={userName} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handleClickUp}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {/* {likes} */}
          {upLikes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handleClickDown}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {/* {dislikes} */}
          {downLikes}
        </span>
      </div>
    </>
  );
};
