import { useParams, Link } from "react-router-dom";
import { getElementById } from "../../API/API";
import PhotoSwipe from "../PhotoSwipe/PhotoSwipe";
import arrowSvg from "../../img/arrow-left2.svg";
import css from "./ProductDetail.module.css";


const ProductDetail = ({ data }) => {
  const { id } = useParams();
  const products = getElementById(data, id);

  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className={css.wrapper}>
      <div className={css.border}></div>
      <Link to={"/"}>
        <img src={arrowSvg} alt="arrow" />
      </Link>
      <h2 className={css.title}>{products.title}</h2>
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
                {artist.website ? (
                  <a
                    href={artist.website}
                    target="blank"
                    className={css.linkWebsite}
                  >
                    website
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
