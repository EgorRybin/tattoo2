import { Link } from "react-router-dom";
import css from "./Card.module.css";

const Card = ({ title, description, id, img }) => {
  return (
    <>
      <div className={css.border}></div>
      <section className={css.itemBox}>
        <article className={css.textBox}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.text}>{description}</p>
        </article>
        <div className={css.imgBox}>
          <img className={css.img} src={img} alt={title} />
          <Link to={`/${id}`} className={css.link}>
            read more
          </Link>
        </div>
      </section>
    </>
  );
};

export default Card;
