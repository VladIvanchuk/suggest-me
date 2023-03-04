import s from "./SuggestMe.module.scss";

export const SuggestMe = () => {
  return (
    <div className={s.container}>
      <h1>Suggest.me</h1>
      <div className={s.text}>
        <p>
          Discover new and exciting movies with Suggest.me!
          <br />
          <br />
          Our platform generates a personalized list of films for you to enjoy, making it
          easy to find your next favorite.
          <br />
          <br />
          Give it a try and see what the algorithm suggests for you
        </p>
      </div>
    </div>
  );
};
