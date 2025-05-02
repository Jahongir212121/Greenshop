import React from "react";
import "./Handout.css";
import { NavLink } from "react-router-dom";

export default function Handout() {
  return (
    <section className="handout">
      <div className="container">
        <div className="handout__inner">
          <div className="handout__inner-links">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "handout__inner-links-linkk"
                  : "handout__inner-links-link"
              }
              to={""}
            >
              Product Description
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "handout__inner-links-linkk"
                  : "handout__inner-links-link"
              }
              to={"/shop/review"}
            >
              Reviews (19)
            </NavLink>
          </div>
          <div className="handout__inner-content">
            <p className="handout__inner-content-text1">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam fringilla augue nec est tristique auctor. Donec non est at
              libero vulputate rutrum. Morbi ornare lectus quis justo gravida
              semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit
              id nulla.
            </p>
            <p className="handout__inner-content-text2">
              Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
              feugiat sem, quis fermentum turpis eros eget velit. Donec ac
              tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
              eget sagittis vulputate, sapien libero hendrerit est, sed commodo
              augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
              nisi posuere nisl, in accumsan elit odio quis mi. Cras neque
              metus, consequat et blandit et, luctus a nunc. Etiam gravida
              vehicula tellus, in imperdiet ligula euismod eget. The ceramic
              cylinder planters come with a wooden stand to help elevate your
              plants off the ground.
            </p>
            <div className="handout__inner-content-box">
              <h2 className="handout__inner-content-box-heading">
                Living Room:
              </h2>
              <p className="handout__inner-content-box-text">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <div className="handout__inner-content-boxx">
              <h2 className="handout__inner-content-box-heading">
                Dining Room:
              </h2>
              <p className="handout__inner-content-box-text">
                The benefits of houseplants are endless. In addition to cleaning
                the air of harmful toxins, they can help to improve your mood,
                reduce stress and provide you with better sleep. Fill every room
                of your home with houseplants and their restorative qualities
                will improve your life.
              </p>
            </div>
            <div className="handout__inner-content-boox">
              <h2 className="handout__inner-content-box-heading">Office:</h2>
              <p className="handout__inner-content-box-text">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
