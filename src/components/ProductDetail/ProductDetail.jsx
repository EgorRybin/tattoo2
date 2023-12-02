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
      <Link to={"/"}>
        <img className={css.arrow} src={arrowSvg} alt="arrow" />
      </Link>
      <h2>{products.title}</h2>
      <p>{products.fullPreDescription}</p>
      <ol>
        {products.descriptionList.map((d, i) => (
          <li key={i}>
            <p>{d}</p>
          </li>
        ))}
      </ol>
      <p>{products.fullPostDescription}</p>
      <PhotoSwipe products={products} />
    </div>
  );
};

export default ProductDetail;
