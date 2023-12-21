import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import css from "./PhotoSwipe.module.css";

const PhotoSwipe = ({ products }) => {
  return (
    <Gallery>
      <div className={css.gallery}>
        <ul className={css.list}>
          {products.img.map((product, i) => (
            <li key={i} className={css.item}>
              <Item
                key={product.id}
                original={product.img}
                thumbnail={product.img}
                width={product.width}
                height={product.height}
              >
                {({ ref, open }) => (
                  <img
                    alt={product.alt}
                    style={{ maxWidth: "100%" }}
                    ref={ref}
                    onClick={open}
                    src={product.img}
                  />
                )}
              </Item>
            </li>
          ))}
        </ul>
      </div>
    </Gallery>
  );
};

export default PhotoSwipe;
