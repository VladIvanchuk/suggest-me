import s from "./SuggestMe.module.scss";
import Container from "../Container/Container";
const MyComponent = () => (
  <section className={s.suggest}>
    <Container>
      <div className={s.suggest__content}>
        <p className={s.suggest__text}>
          Didin’t find the one you looking for?
        </p>

        <a className={s.suggest__btn} href="/suggest">
          Suggest more
        </a>
      </div>
    </Container>
  </section>
);

export default MyComponent;
