import s from './Wrapper.module.scss';
import { Card } from '../../Components';

const movies = ['Black Widow', 'Shang Chi', 'Loki', 'How I Met Your Mother', 'Money Heist', 'Friends', 'The Big Bang Theory', 'Two And a Half Men'];

const Wrapper = () => {
  return (
    <div className={s.Wrapper}>
      {movies.map((movie) => (
        <div className={s.Card}>
          <Card filmName={movie} />
        </div>
      ))}
    </div>
  )
}

export default Wrapper;