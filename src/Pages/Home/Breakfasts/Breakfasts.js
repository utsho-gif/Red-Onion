import React from "react";
import useData from "../../../hook/useData";
import Breakfast from "../Breakfast/Breakfast";

const Breakfasts = () => {
  const [datas, setDatas] = useData();

  return (
    <div className="container">
      <div className="row mt-5">
        {datas.slice(0,6).map((breakfast) => (
          <Breakfast key={breakfast.id} breakfast={breakfast}></Breakfast>
        ))}
      </div>
    </div>
  );
};

export default Breakfasts;
