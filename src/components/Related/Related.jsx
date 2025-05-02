import React, { useEffect, useState } from "react";
import "./Related.css";
import { NavLink } from "react-router-dom";
import Item from "../Item/Item";
import { API } from "../../pages/utils/config";
export default function Related() {
  const [plantRender, setPlantRender] = useState(null);
  useEffect(() => {
    API.get("/flowers").then((res) => {
      setPlantRender(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <section className="related">
      <div className="container">
        <div className="related__inner">
          <div className="handout__inner-links">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "related__inner-links-linkk"
                  : "handout__inner-links-linkk"
              }
              to={"/shop"}
            >
              Product Description
            </NavLink>
          </div>
          <div className="mt-[44px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {plantRender?.map((item) => {
              return (
                <Item
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
