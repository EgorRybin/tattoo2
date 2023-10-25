import Card from "../Card/Card";
import css from "./Main.module.css";

const Main = ({ data }) => {
  return (
    <main className={css.main}>
      <ul className={css.list}>
        {data.map((d) => (
          <li className={css.item} key={d.id}>
            <Card
              title={d.title}
              description={d.description}
              id={d.id}
              img={d.titleImg}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
