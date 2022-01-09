import React from "react";

const SponsItem = (props) => {
  return (
    <div className="spons-item">
      <div
        className="item clean"
        style={{
          backgroundColor: "black",
        }}
      >
        {/* <a href={props.link} target="_blank" rel="noreferrer"> */}
        <img
          src={props.image}
          style={{
            height: "160px",
            width: "300px",
            objectFit: "contain",
          }}
          alt=".."
        />
        <div className="overlay">
          <span></span>
          <span>{props.name}</span>
          <span></span>
          <span></span>
        </div>
        {/* </a> */}
      </div>
    </div>
  );
};

export default SponsItem;
