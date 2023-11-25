import './style.css';
import { JokeBody } from '../../components/JokeBody';
import { JokeLikes } from '../../components/JokeLikes';

export const HomePage = () => {
  return (
    <div class="container">
      <div class="joke">
        <JokeBody />
        <JokeLikes />
      </div>
    </div>
  );
};
