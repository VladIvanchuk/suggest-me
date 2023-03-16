import s from "./Hero.module.scss";
import Container from "../Container/Container";

const Hero = () => (
  <section className={s.hero}>
    <Container>
      <div className={s.hero__content}>
        <h1 className={s.hero__heading}>
          Suggest.me
        </h1>

        <p className={s.hero__text}>
          Discover new and exciting movies with Suggest.me! <br/><br/>

          Our platform generates a personalized list of films for you to enjoy, making it easy to find your next favorite. <br/><br/>

          Give it a try and see what the algorithm suggests for you 😉
        </p>
      </div>
    </Container>
  </section>
);

export default Hero;