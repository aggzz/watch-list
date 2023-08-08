import React from "react";
import "./style.css";

const GridView = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((dataObj) => (
        <div key={dataObj.id}>
          <img
            src={`https://test.create.diagnal.com/images/${dataObj.posterImage}`}
          />
          {dataObj.title}
        </div>
      ))}
    </div>
  );
};

export default GridView;
