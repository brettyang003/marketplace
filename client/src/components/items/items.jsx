import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Item from "./Item/item";
import axios from "axios";

function Items(props) {
  let [items, setItems] = useState([]);
  const getItems = () =>
    axios.get("/marketplace/").then((res) => {
      const newItemList = res.data;
      setItems(newItemList);
      return items;
    });
  getItems();

  return (
    <Row sm={1} md={2} lg={3} className="px-2">
      {items.map((item, index) => {
        return (
          <Item
            key={index}
            description={item.description}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </Row>
  );
}

export default Items;
