import React from "react";
import Card from "react-bootstrap/Card";
import { Dropdown } from "react-bootstrap";

function ItemHeader(props) {
  return (
    <Card.Title className="mb-3">
      <Dropdown>
        <Dropdown.Toggle variant="white" id="dropdown-basic">
          {props.name}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={props.handleEdit}>Edit Post</Dropdown.Item>
          <Dropdown.Item onClick={props.handleDelete}>
            Delete Post
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Card.Title>
  );
}

export default ItemHeader;
