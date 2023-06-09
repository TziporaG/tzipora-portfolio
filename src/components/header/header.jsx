import React from "react";
import "./header.css";
import ButtonsRow from "./buttons_row";
import profile from "../../assets/profile.png";
import chatgpt_img from "../../assets/chatgpt_img.jpeg";
import computer_img from "../../assets/computer.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="header__container--col">
          <h1>Hi there, I'm Tzipora</h1>
          <h3 className="text-light">
            Nice to meet you, I'm happy you're here. I'm a software developer
            with a passion to learn new things and challenge myself to create
            awesome code. Take a look around and let's connect!
          </h3>
          <ButtonsRow />
          <div className="scroll__down">
            <a href="#contact">
              <MdKeyboardDoubleArrowDown
                size={50}
                color={"var(--color-accent)"}
              />
            </a>
          </div>
        </div>

        <div className="header__container--col">
          <img src={computer_img} className="img" alt="can not render image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
