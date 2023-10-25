import { Link } from "react-router-dom";
import css from "./Card.module.css";

const Card = ({ title, description, id, img }) => {
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
          <Link to={`/${id}`} className={css.link}>
            read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
