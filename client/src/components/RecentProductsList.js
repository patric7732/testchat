import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecentProducts } from "../_actions/productAction";
import Button from "./UI/Button";

import classes from "../styles/RecentProductsList.module.css";

const RecentProductsList = () => {
  const dispatch = useDispatch();
  const [lastProdId, setLastProdId] = useState(null);
  const [productsList, setProductsList] = useState([]);
  const [displayMore, setDisplayMore] = useState(true);

  const onClickMoreProduct = () => {
    setLastProdId(productsList[productsList.length - 1].id);
  };

  useEffect(() => {
    console.log("lastProdId", lastProdId);
    dispatch(getRecentProducts(lastProdId))
      .then((response) => {
        const prodListFromDb = response.payload.products ?? [];
        console.log(prodListFromDb);
        setProductsList((productsList) => [...productsList, ...prodListFromDb]);

        if (prodListFromDb.length < 12 || prodListFromDb[0]?.id <= 12) {
          setDisplayMore(false);
        }
      })
      .catch((err) => err);
  }, [dispatch, lastProdId]);

  return (
    <Fragment>
      <div className={classes.latestProductContainer}>
        <h1>판다의 최근 상품</h1>

        <div className={classes.prodCardWrap}>
          <div className={classes.prodCardContainer}>
            {productsList.map((product) => (
              <div key={product.id} className={classes.prodCard}>
                <Link to={`/products/${product.id}`}>
                  <div className={classes.imgBox}>
                    <img
                      src={product.image}
                      className={classes.prodImg}
                      alt=""
                    />
                  </div>

                  <div className={classes.prodInfo}>
                    <div className={classes.prodName}>{product.title}</div>
                    <div className={classes.prodPrice}> {product.price}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.moreButtonWrap}>
          {displayMore ? (
            <Button onClick={onClickMoreProduct}>
              <div className={classes.moreButton}>더보기</div>
            </Button>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default RecentProductsList;
