import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./style.css";

const GridView = (props) => {
  const { data } = props;
  const gridContainerRef = useRef();

  return (
    <div data-testid="grid-id" className="grid-wrapper" ref={gridContainerRef}>
      {data.map((dataObj, index) => (
        <div
          key={index}
          className="grid-item"
          style={{
            maxWidth:
              ((gridContainerRef.current
                ? gridContainerRef.current.offsetWidth
                : 0) -
                40) /
              3,
          }}
        >
          <img
            loading="lazy"
            src={`https://test.create.diagnal.com/images/${
              dataObj[`poster-image`]
            }`}
            alt=""
            className="grid-image"
            onError={(event) => {
              event.target.src =
                "https://test.create.diagnal.com/images/placeholder_for_missing_posters.png";
            }}
          />
          <div className="poster-name">{dataObj.name} </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
