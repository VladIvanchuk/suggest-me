import s from "./Body.module.scss";

const Body = () => {
  return (
    <div className={s.body}>
      <h1 className={s.title}>Suggest.me</h1>
      <p className={s.text}>
        Discover new and exciting movies with Suggest.me!
        <br />
        Our platform generates a personalized list of films for you to enjoy,
        making it easy to find your next favorite.
        <br />
        Give it a try and see what the algorithm suggests for you 😉
      </p>
    </div>
  );
};

export default Body;
