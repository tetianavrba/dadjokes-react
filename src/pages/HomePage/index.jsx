import './style.css';
// import { JokeBody } from '../../components/JokeBody';
// import { JokeLikes } from '../../components/JokeLikes';
import { Joke } from '../../components/Joke';

const response = await fetch('http://localhost:4000/api/jokes');
const data = await response.json();
const jokes = data.result;

export const HomePage = () => {
  return (
    <div className="container">
      <div className="joke">
        {/* <JokeBody />
        <JokeLikes /> */}

        {jokes.map((joke) => (
          <Joke
            key={joke.id}
            id={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        ))}
      </div>
    </div>
  );
};
