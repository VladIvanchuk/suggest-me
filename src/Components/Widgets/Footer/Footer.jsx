import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.Footer}>
      <span>Didint find the one you looking for?</span>
      <button>Suggest more</button>
    </div>
  );
};

export default Footer;
