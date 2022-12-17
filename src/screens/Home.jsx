import React from "react";

import SortBy from "../components/SortBy";
import Categories from "../components/Categories";
import ItemCard from "../components/ItemCard";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setItems } from "../redux/slices/itemSlice";

function Home() {
  const dispatch = useDispatch();

  const searchValue = useSelector((state) => state.itemSlice.searchValue);

  const getItems = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const json = await res.json();
    dispatch(setItems(json.products));
  };

  const items = useSelector((state) => state.itemSlice.items);

  const categoryActive = useSelector((state) => state.itemSlice.category);

  React.useEffect(() => {
    getItems();
  }, []);

  const popupActive = useSelector((state) => state.itemSlice.popupActive);

  return (
    <div className="px-8  bg-[#f3f4f6] py-3">
      <div className="flex justify-between my-10">
        <Categories />
        <SortBy />
      </div>
      {searchValue && (
        <div className="text-[24px] font-[500]">
          Поиск по запросу:{" "}
          <span className="font-[600] text-[28px]">{searchValue}</span>
        </div>
      )}
      <div className="grid  gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {categoryActive === "All" &&
          items
            .filter((item) => {
              if (
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return true;
              }
              return false;
            })
            .sort(function (a, b) {
              if (popupActive === 0) {
                return b.price - a.price;
              }
              return a.price - b.price;
            })
            .map((item, id) => <ItemCard {...item} key={id} />)}
        {categoryActive !== "All" &&
          items
            .filter((item) => {
              if (
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return true;
              }
              return false;
            })
            .filter((item) => {
              if (item.category === categoryActive) {
                return true;
              }
              return false;
            })
            .sort(function (a, b) {
              if (popupActive === 0) {
                return b.price - a.price;
              }
              return a.price - b.price;
            })
            .map((item, id) => <ItemCard {...item} key={id} />)}
      </div>
    </div>
  );
}

export default Home;
