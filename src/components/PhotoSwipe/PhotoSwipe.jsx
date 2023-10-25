import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import css from "./PhotoSwipe.module.css";

const MyGallery = ({ products }) => {
  return (
    <Gallery>
      <div className={css.gallery}>
        {products.img.map((product) => (
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
                className={css.item}
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default MyGallery;
