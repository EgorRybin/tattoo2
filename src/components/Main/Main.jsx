import Card from "../Card/Card";
import css from "./Main.module.css";
// import Reveal from "react-reveal/Reveal";

const Main = ({ data }) => {
  return (
    <section className={css.container}>
      <ul className={css.list}>
        {data.map((d) => (
          <li className={css.item} key={d.id}>
            <Card title={d.title} description={d.description} link={d.link} img={d.img} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Main;
