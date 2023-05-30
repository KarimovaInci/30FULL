import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdPhotoCamera } from "react-icons/md";
import "./Card.scss";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux/wishlistSlice/wishlistSlice";
const Card = () => {
  let items=useSelector(state=>state.wishlist.items)
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isAscending, setisAscending] = useState(true);
  const [dummy, setDummy] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8585/bizpro").then((res) => {
      setData(res.data);
      setDummy(false);
    });
  }, [search === "", dummy ? data : ""]);
  return (
    <>
      <div className="cardSec">
        <div className="cardSec__title">
          <h2>ABOUT OUR BIZPRO</h2>
          <div className="line"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
        </div>
        <div className="cardSec__inputs">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
              setData(
                data.filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
              );
            }}
          />
          <button
            onClick={() => {
              const sortedData = data.sort((a, b) => {
                if (isAscending) {
                  return a.price - b.price;
                } else {
                  return b.price - a.price;
                }
              });
              setData(sortedData);
              setisAscending(!isAscending);
            }}
          >
            Sort by Price
          </button>
        </div>
        <div className="cardSec__cards">
          {data.map((item, index) => {
            return (
              <div className="cardSec__cards__card" key={index}>
                <div className="cardSec__cards__card__circle">
                  <MdPhotoCamera className="icon" />
                </div>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <p className="price">{item.price}</p>
                <div className="btns">
                  <button
                    onClick={() => {
                      axios
                        .delete(`http://localhost:8585/bizpro/${item._id}`)
                        .then((res) => {
                          toast.success("card has been deleted");
                          setDummy(true);
                        });
                    }}
                  >
                    Delete
                  </button>
                  <button onClick={()=>{
                      dispatch(addToBasket(item))
                  }}
                  >
                    Add to Basket
                  </button>
                </div>
                <Link to={`${item._id}`}>Go to Details</Link>
              </div>
            );
          })}
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Card;
