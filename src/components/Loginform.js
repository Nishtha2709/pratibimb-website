import React from "react";
import "./loginform.css";
import HeroCommon from "./HeroCommon";

const LoginForm = () => {
  return (
    <div>
      <HeroCommon
        imgClass="hero-events"
        title="Event Registration"
        subtitle="Login using your Gmail"
      ></HeroCommon>
      <div style = {{ background: "black"}}>
        <div className="illuminati-theme">
        <h2 data-aos="fade-up"> Login Here </h2>
        </div>
      </div>

    </div>
  )
}

export default LoginForm
