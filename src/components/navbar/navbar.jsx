import "./navbar.scss";
import React from "react";
import { navbar } from "../../data";
import { socials } from "../../data";

function Navbar() {
  return (
    <div className="">
      <nav>
        {navbar.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.icon}</a>
            </li>
          );
        })}
      </nav>
      <ul>
        {socials.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
