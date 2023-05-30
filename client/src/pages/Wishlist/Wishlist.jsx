import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Header from "../../layout/Header/Header";
import { MdPhotoCamera } from "react-icons/md";
import "./Wishlist.scss"
import { removeFromWishlist } from "../../redux/wishlistSlice/wishlistSlice";

const Wishlist = () => {
  let items = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <Header />
      <div className="wishlistCard">
        {items.map((item, index) => {
          return (
            <div className="cardSec__cards__card" key={index}>
              <div className="cardSec__cards__card__circle">
                <MdPhotoCamera className="icon" />
              </div>
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <p className="price">{item.price}</p>
              <div className="btns">
                <button onClick={()=>{
                  dispatch(removeFromWishlist(item.id))
                }
                }>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Wishlist;
