import React, { Fragment } from "react";

import classes from "../../styles/ProductCard.module.css";
import { useSelector } from "react-redux";
import Paging from "../../components/UI/Paging";

const ProductCard = (props) => {
  const searchedProducts = useSelector(
    (state) => state.product.searchProducts?.products
  );
  console.log(searchedProducts);
  return (
    <Fragment>
      <div className={classes.prodCardWrap}>
        <div className={classes.prodCardContainer}>
          {searchedProducts?.map((product) => (
            <div className={classes.prodCard}>
              <div className={classes.imgBox}>
                <img src={product.image} className={classes.prodImg} alt="" />
              </div>

              <div className={classes.prodInfo}>
                <div className={classes.prodName}>{product.name}</div>
                <div className={classes.prodPrice}> {product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Paging /> */}
    </Fragment>
  );
};

export default ProductCard;
