import React, { useRef } from "react";
import "./style.css";

const GridView = (props) => {
  const { data } = props;
  const gridContainerRef = useRef();

  return (
    <div className="grid-wrapper" ref={gridContainerRef}>
      {data.map((dataObj) => (
        <div
          key={dataObj.id}
          className="grid-item"
          style={{ maxWidth: (gridContainerRef.current.offsetWidth - 40) / 3 }}
        >
          <img
            loading="lazy"
            src={`https://test.create.diagnal.com/images/${
              dataObj[`poster-image`]
            }`}
            className="grid-image"
          />
          <div>{dataObj.name} </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
