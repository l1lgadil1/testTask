import React from "react";

import { plusItem, minusItem, deleteItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

function CartItemCard({ price, title, description, thumbnail, id, count }) {
  const dispatch = useDispatch();
  const onHandlePlus = () => {
    dispatch(plusItem(id));
  };
  const onHandleMinus = () => {
    dispatch(minusItem(id));
  };

  const onHandleDelete = () => {
    if (window.confirm("Вы действительно хотите удалить товар ?")) {
      dispatch(deleteItem(id));
    }
  };

  const totalPriceItem = count * price;

  return (
    <>
      {count > 0 && (
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <img className="w-[100px] h-[100px]" src={thumbnail} alt="img" />
            <button
              className="text-gray-500 text-[16px] font-[600]"
              onClick={onHandleDelete}
            >
              Удалить товар
            </button>
          </div>
          <div className="">
            <h1 className="font-[700] text-[24px]">{title}</h1>
            <p className="font-[500] text-[18px]">{description}</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="font-[500] text-[20px] text-[#4b5563]">
                price:{" "}
              </span>
              <b className="text-[28px] font-[600]">{totalPriceItem}</b>
            </div>
            <div className="flex flex-col gap-5 ml-12">
              <button
                onClick={onHandlePlus}
                className="w-6  h-6 flex justify-center items-center  text-center text-white bg-[#71717a] rounded-full"
              >
                +
              </button>
              <span className="text-center text-[24px] font-[500]  text-[#334155]">
                {count}
              </span>
              <button
                onClick={onHandleMinus}
                className="w-6  h-6 flex justify-center items-center  text-center text-white bg-[#71717a] rounded-full"
              >
                -
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartItemCard;
