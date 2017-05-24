import React from "react";
import {Link} from "react-router-dom"
import Header from "../Header/header"
import "./Landing.css"
export default function Landing() {
  return (
    <div className="landing_container">
      <Header/>
      <div src="./Assets/lawn_mower.jpg" className="mower_img">
        <h1 className="lawn_life_title">Hello, Welcome to Lawn Life Landscaping!</h1>
      </div>
      <div className="footer">
        <Link to="/">Link to stuff</Link>
      </div>
    </div>
  );
}
