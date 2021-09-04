import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";
import "./styles.css";
import ItemHeader from "./itemHeader";
import ItemText from "./itemText";
import axios from "axios";
import Button from "react-bootstrap/Button";

function Item(props) {
  const [editable, setEditable] = useState(false);
  const [item, setItem] = useState({
    name: props.name,
    img: props.img,
    description: props.description,
    price: props.price,
  });
  function handleEditSubmit() {
    axios.post("/marketplace/updateItem", item);
  }
  function handleEdit() {
    setEditable(true);
  }
  function handleDelete() {
    const item = { name: props.name, description: props.description };
    axios.post("/marketplace/deleteItem", item);
  }
  return (
    <Col className="my-2 border-primary ">
      <Card>
        <Card.Body>
          <form action=""></form>
          <ItemHeader
            name={props.name}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <Image className="img mb-4" src={props.img} />
          <form action="">
            <Card.Subtitle className="mb-2 text-muted">
              Description
            </Card.Subtitle>
            {editable ? (
              <ItemText
                type="description"
                editable={editable}
                item={item}
                setItem={setItem}
                content={props.description}
              />
            ) : (
              <Card.Text>
                {props.description || "No Description Provided"}
              </Card.Text>
            )}

            <Card.Subtitle className="mb-2 text-muted">Price</Card.Subtitle>
            {editable ? (
              <ItemText
                type="price"
                editable={editable}
                item={item}
                setItem={setItem}
                content={props.price}
              />
            ) : (
              <Card.Text>${props.price.toFixed(2)}</Card.Text>
            )}

            {editable ? (
              <Button
                onClick={handleEditSubmit}
                variant="primary"
                type="submit"
              >
                Submit Edit
              </Button>
            ) : null}
          </form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
