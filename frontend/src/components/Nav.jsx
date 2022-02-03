import React from "react";
import "./styles/nav.scss";

const Nav = () => {
  return (
    <div className="container">
      <div className="categories">
        <div className="category-women">
          <a href="/women">Women</a>
        </div>
        <div className="category-men">
          <a href="/men">Men</a>
        </div>
        <div className="category-kids">
          <a href="/kids">Kids</a>
        </div>
        <div className="category-baby">
          <a href="/baby">Baby</a>
        </div>
      </div>
      <div className="content-right">
        <div className="search-bar">
          <input type="text" placeholder="Search by Keyword" />
          <button>Search</button>
        </div>
        <div className="user-info">
          <div className="user-profile">Profile</div>
          <div className="user-wishlist">Wishlist</div>
          <div className="user-cart">Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
