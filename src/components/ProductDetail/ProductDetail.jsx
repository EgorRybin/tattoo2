import { useParams, Link } from "react-router-dom";
import { getElementById } from "../../API/API";
import MyGallery from "../PhotoSwipe/PhotoSwipe";
import arrowSvg from "../../img/arrow-left2.svg";
import css from "./ProductDetail.module.css"

const ProductDetail = ({ data }) => {
  const { id } = useParams();
  const products = getElementById(data, id);
  return (
    <div className={css.wrapper}>
      <Link to={"/"}>
        <img className={css.arrow} src={arrowSvg} alt="arrow" />
      </Link>
      <h2>{products.title}</h2>
      <p>{products.fullDescription}</p>
      <MyGallery products={products} />
    </div>
  );
};

export default ProductDetail;
