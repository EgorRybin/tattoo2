import css from "./Header.module.css";

const Header = () => {
    return (
      <section className={css.header}>
        <h1 className={css.title}>TATTOO IDEAS</h1>
      </section>
    );
};

export default Header;
