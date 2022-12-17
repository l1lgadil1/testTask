import React from "react";
import { setActivePopup } from "../redux/slices/itemSlice";
import { useDispatch } from "react-redux";

function SortBy() {
  const sortList = ["убыванию цены", "возрастанию цены"];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const dispatch = useDispatch();

  const onChangeSort = (id) => {
    setCurrentIndex(id);
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    if (currentIndex === 0) {
      dispatch(setActivePopup(0));
    } else {
      dispatch(setActivePopup(1));
    }
  }, [currentIndex]);

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[18px] font-[500]">Сортировка по:</span>
        <span className="decoration-dotted text-[20px] font-[600] ml-1 underline text-[#fca5a5]">
          {sortList[currentIndex]}
        </span>
      </div>
      {isOpen && (
        <ul className=" bg-white rounded-lg pb-3 ">
          {sortList.map((item, id) => (
            <li
              key={id}
              className=" w-full text-[18px] font-[500] border-b-[1px] p-2 hover:bg-[#f4f4f5] cursor-pointer "
              onClick={() => onChangeSort(id)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortBy;
