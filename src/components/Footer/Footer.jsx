import css from "./Footer.module.css"

const Footer = () => {
    const date = new Date().getFullYear();
    return (
      <section className={css.footer}>
        <div className={css.container}>Created {date} TATTOO IDEAS &copy;</div>
      </section>
    );
};

export default Footer;