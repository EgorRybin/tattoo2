import css from "./Card.module.css";

const Card = ({ title, description, link, img }) => {
  return (
    <>
      <div className={css.border}></div>
      <div className={css.itemBox}>
        <div className={css.textBox}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.text}>{description}</p>
        </div>
        <div className={css.imgBox}>
          <img className={css.img} src={img} alt={title} />
          <a
            className={css.link}
            href={link}
            target="blank"
            aria-label="get a tattoo design"
          >
            get a tattoo design
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
