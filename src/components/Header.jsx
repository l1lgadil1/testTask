import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setSearchValue } from "../redux/slices/itemSlice";
import { useDispatch } from "react-redux";

function Header() {
  const searchValue = useSelector((state) => state.itemSlice.searchValue);
  const dispatch = useDispatch();
  const cartArr = useSelector((state) => state.cartSlice.cartItems);

  const totalItems = cartArr.reduce((sum, obj) => {
    return sum + obj.count;
  }, 0);

  return (
    <div className="py-5 px-5 flex justify-around items-center border-b-[1px] border-[#e5e7eb]        ">
      <Link to="/" className="font-[600] text-[24px]">
        Online Shop
      </Link>
      <div className="w-1/4 flex items-center border-[1px] px-2 border-[#a3a3a3] rounded-md ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          value={searchValue}
          placeholder="Найти..."
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
          className="w-full outline-none  py-3 pl-2 text-[18px] "
        />
        {searchValue && (
          <div
            className="cursor-pointer"
            onClick={() => dispatch(setSearchValue(""))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
      <Link to="cart">
        <div className="flex flex-col relative">
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
          <span className="rounded-full text-center font-[700] text-white text-[16px] w-7 h-7 bg-[#6b7280] absolute bottom-[-20px] right-[-20px]">
            {totalItems}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
