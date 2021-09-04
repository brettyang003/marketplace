import React from "react";
import Form from "react-bootstrap/Form";
function FormLabel(props) {
  const itemData = props.itemData;
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>
        {props.type === "img" ? "image link" : props.type}
      </Form.Label>
      <Form.Control
        name={props.type}
        onChange={(e) =>
          props.setItemData({ ...itemData, [props.type]: e.target.value })
        }
      />
    </Form.Group>
  );
}

export default FormLabel;
