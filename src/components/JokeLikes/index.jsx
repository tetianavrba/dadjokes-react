import './style.css';

export const JokeLikes = () => {
  return (
    <div class="joke__likes">
      <button id="btn-up" class="btn-like btn-like--up"></button>
      <span id="likes-up" class="likes-count likes-count--up">
        0
      </span>
      <button id="btn-down" class="btn-like btn-like--down"></button>
      <span id="likes-down" class="likes-count likes-count--down">
        0
      </span>
    </div>
  );
};
