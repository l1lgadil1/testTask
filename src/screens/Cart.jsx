import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import CartItemCard from "../components/CartItemCard";
import { clear } from "localforage";

function Cart() {
  const cartItems = useSelector((state) => state.cartSlice?.cartItems);
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice);
  const totalItemsCount = cartItems.reduce((sum, obj) => {
    return sum + obj.count;
  }, 0);

  const dispatch = useDispatch();

  const onHandleClearCart = () => {
    if (window.confirm("Вы действительно хотите очистить корзину? ")) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="px-10 py-14  bg-[#f3f4f6]">
      <h1 className="my-12 text-[38px] font-[700] flex items-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <span>Корзина</span>
      </h1>

      <div className="">
        {totalItemsCount > 0 && (
          <div>
            <div className="flex flex-col gap-4 bg-white rounded-lg p-10 border-b-[1px] border-[#a3a3a3]">
              <div
                onClick={onHandleClearCart}
                className="flex justify-end items-center my-5 text-[#d1d5db] text-[20px] gap-2 hover:text-[#4b5563] cursor-pointer transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                <span>Очистить корзину</span>
              </div>
              {cartItems?.map((item, id) => (
                <CartItemCard {...item} key={id} />
              ))}
              <div className="flex justify-between flex-row-reverse">
                <div className="text-[24px] font-[500]">
                  Сумма заказа:
                  <span className="text-[24px] font-[700] text-[#4ade80] ml-2 ">
                    {totalPrice}
                  </span>
                </div>
                <div className="text-[24px] font-[500]">
                  Всего товаров:
                  <span className="text-[20px] font-[600]">
                    {totalItemsCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {totalItemsCount === 0 && (
          <div className="text-center  font-[600] text-[42px]">
            Корзина пуста.Добавьте товар, чтобы заполнить ее :)
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
