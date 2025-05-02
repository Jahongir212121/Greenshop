import { useEffect, useState } from "react";
import Item from "../Item/Item";
import { API } from "../../pages/utils/config";

function All() {
  const [plantRender, setPlantRender] = useState(null);
  useEffect(() => {
    API.get("/flowers").then((res) => {
      setPlantRender(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
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
    </>
  );
}

export default All;
