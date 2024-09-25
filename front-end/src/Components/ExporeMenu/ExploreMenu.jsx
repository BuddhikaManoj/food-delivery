import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { CiStar } from "react-icons/ci";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <div className="explore-menu-heading">
      <CiStar /><CiStar /><CiStar /><CiStar /><CiStar /><h1>Our menu</h1><CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
      </div>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                {setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )}}
              className="explore-menu-item"
              key={index}
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="menu_image"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
