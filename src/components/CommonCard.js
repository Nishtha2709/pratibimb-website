import * as React from "react";
import NeonButton from "./NeonButton";

const IlluminatiCard = ({ name, image, results }) => {
  return (
    <div className="card-illuminati">
      <div className="imgbox">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="content-illuminati">
        <p>{`1st Place - ${results[0]}`}</p>
        <p>{`2nd Place - ${results[1]}`}</p>
        <p>{`3rd Place - ${results[2]}`}</p>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

const PACard = ({ name, image }) => {
  return (
    <div className="card-pa">
      <div className="imgbox">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="content-pa">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

const RegisterCard = ({ name, image }) => {
  return (
    <div className="card-pa">
      <div className="imgbox">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="content-pa">
        <h3>{name}</h3><br></br>
        <NeonButton href="/login"> Register Now! </NeonButton>
      </div>
    </div>
  );
};

const CommonCard = ({ type, name, image, results }) => {
  return (
    <div>
      {type === "pa" ? (
        <PACard name={name} image={image} />
      ) : type === "reg" ? (
        <RegisterCard name={name} image={image} /> 
      ) : (<PACard name={name} image={image}  />)}
    </div>
  );
};


export default CommonCard;
