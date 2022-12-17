import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/itemSlice";

function Categories() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const dispatch = useDispatch();
  const listCategory = [
    "All",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];

  const onHandleCategory = (id) => {
    setCurrentIndex(id);
    dispatch(setCategory(listCategory[id]));
  };

  return (
    <div className="flex gap-4 items-center">
      {listCategory.map((item, id) => (
        <div
          onClick={() => onHandleCategory(id)}
          className={`py-3 px-5 cursor-pointer ${
            currentIndex === id ? "bg-[#262626] text-white" : "bg-[#fafaf9]"
          }   font-[600]  rounded-xl`}
          key={id}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Categories;
