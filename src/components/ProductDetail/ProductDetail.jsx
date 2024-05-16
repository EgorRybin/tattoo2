import { useParams, Link } from "react-router-dom";
import { getElementById } from "../../API/API";
import PhotoSwipe from "../PhotoSwipe/PhotoSwipe";
import css from "./ProductDetail.module.css";

const ProductDetail = ({ data }) => {
  const { id } = useParams();
  const products = getElementById(data, id);

  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className={css.wrapper}>
      <div className={css.border}></div>
      <div className={css.listArtistName}>
        <Link to={"/"}>
          <svg
            className={css.arrowLink}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>arrow-left2</title>
            <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
          </svg>
        </Link>
      </div>
      <h2 className={css.title}>{products.title}</h2>
      <div className={css.listArtistName}>
        <a href={products.affLink} target="blank" className={css.linkArtist}>
          order a design
        </a>
      </div>
      <p className={css.description}>{products.fullPreDescription}</p>
      <ol>
        {products.descriptionList.map((d, i) => (
          <li className={css.description} key={i}>
            <p className={css.description}>{d}</p>
          </li>
        ))}
      </ol>
      <p className={css.description}>{products.fullPostDescription}</p>
      <PhotoSwipe products={products} />
      <h2 className={css.historyTitle}>History</h2>
      <p className={css.description}>{products.tattooHistory}</p>
      <h2 className={css.title}>World famous Artists</h2>
      <ul>
        {products.artists.map((artist, i) => (
          <li key={i} className={css.listArtistName}>
            <a href={`#${i}`} className={css.linkArtist}>
              {artist.name}
            </a>
          </li>
        ))}
      </ul>
      <ul>
        {products.artists.map((artist, i) => (
          <li key={i} id={i} className={css.listArtist}>
            <div className={css.box}>
              <img
                src={artist.picture}
                alt="tattoo artist"
                className={css.img}
              />
              <div>
                <p className={css.description}>{artist.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
