import React from "react";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { IoSearch } from "react-icons/io5";
import { BsCart4,BsSearch, } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl"; 
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* Logo */}
          <div className={classes.logo_container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"

                alt="Amazon Logo"/>
            </a>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                {/* Delivery */}
                <p>Delivered to</p>
                <span>ETHIOPIA</span>
              </div>
            </div>
          </div>
          {/* Search */}
          <div className={classes.search}>
            <select name=" "id ="">
              <option value="">All</option>
            </select>
            <input type="text"/>
            <BsSearch size ={25} />
          </div>
           {/* Language Selector */}
          <div className={classes.order__container}>
            <a href=""className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/500px-Flag_of_the_United_States.svg.png"
              alt="US Flag"/>
            <select>
              <option value="">EN</option>
            </select>
            </a>
            <a href="#">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            <a href="" className={classes.cart}>
              <BsCart4 size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader/> 
    </>
  );
};

export default Header;
