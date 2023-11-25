import './style.css';

export const JokeBody = () => {
  return (
    <div class="joke__body">
      <div class="joke__user">
        <img
          class="user-avatar"
          src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
        />
        <p class="user-name">Neroxx</p>
      </div>

      <p class="joke__text">
        The secret service isn't allowed to yell "Get down!" anymore when the
        president is about to be attacked. Now they have to yell "Donald, duck!"
      </p>
    </div>
  );
};
