import React from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

function ItemCard({ images, title, id, price, description, thumbnail,count }) {
  const [isHover, setIsHover] = React.useState(false);
  const dispatch = useDispatch();

  const onHandleAdd = () => {
    dispatch(addItem({ images, title, id, price, description, thumbnail,count }));
  };

  return (
    <div
      className=" bg-white  rounded-md flex flex-col items-center p-3"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img className="h-[200px] w-min-[200px]" src={images[0]} alt="card-img" />
      <h1 className="text-[18px] font-[600] my-3">{title}</h1>
      <b> price: {price}</b>
      <div
        className={` transition-all duration-300 bg-white flex justify-center items-center rounded-md py-2 ${
          isHover ? "opacity-1 " : "opacity-0 w-0 h-0 overflow-hidden"
        }`}
      >
        <button
          onClick={onHandleAdd}
          className={
            isHover
              ? "active:opacity-[0.7] py-3 px-6 text-white font-[600] text-[18px] bg-blue-400 rounded-lg"
              : ""
          }
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
