import React from "react"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={"footer container-fluid"}>
      <div>
        <span>Created by: </span>
        <a href="https://github.com/Tsames">Tom Ames</a>
      </div>
      <a href="https://github.com/Tsames/but_when_frontend">github repo</a>
    </div>
  )
}

export default Footer;