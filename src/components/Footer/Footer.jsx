import css from "./Footer.module.css"

const Footer = () => {
    // const date = new Date().getFullYear();
    return (
      <footer className={css.footer}>
        <div className={css.container}>Created 2023 TATTOO IDEAS &copy;</div>
      </footer>
    );
};

export default Footer;