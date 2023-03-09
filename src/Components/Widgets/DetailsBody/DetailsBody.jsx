import { Mark } from "../../UI/Mark/Mark";
import s from "./DetailsBody.module.scss";

export const DetailsBody = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.photo}></div>
      <div className={s.info}>
        <h3>Part of the journey is the end.</h3>
        <p>
          After the devastating events of Avengers: Infinity War, the universe is in ruins
          due to the efforts of the Mad Titan, Thanos. With the help of remaining allies,
          the Avengers must assemble once more in order to undo Thanos' actions and
          restore order to the universe once and for all, no matter what consequences may
          be in store.
        </p>
        <Mark className={s.mark} mark={8.3} />
        <div>
          <div className={s.title}>Type</div>
          <div className={s.text}>Movie</div>
        </div>
        <div>
          <div className={s.title}>Release Date:</div>
          <div className={s.text}>2019-04-24</div>
        </div>
        <div>
          <div className={s.title}>Run time</div>
          <div className={s.text}>181 min</div>
        </div>
        <div>
          <div className={s.title}>Genres</div>
          <div className={s.text}>Adventure, Science Fiction, Action</div>
        </div>
      </div>
    </div>
  );
};
