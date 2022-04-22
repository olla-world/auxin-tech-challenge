import React from "react";

const Legend = ({ legendItems }) => {
  return (
    <div className="d-flex flex-fill">
      {legendItems.map((item) => (
        <div
          key={item.title}
          style={{
            backgroundColor: item.color,
            color: item.textColor != null ? item.textColor : "black",
            height: "10vh",
          }}
          className="d-flex justify-content-center align-items-center flex-fill"
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
