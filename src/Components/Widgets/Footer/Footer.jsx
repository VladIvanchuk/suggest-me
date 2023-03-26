import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.Footer}>
      <span>Didin’t find the one you looking for?</span>
      <button>
      <a href="/">Suggest more</a>
      </button>
    </div>
  );
};

export default Footer;
