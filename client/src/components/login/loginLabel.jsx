import React from "react";
import Form from "react-bootstrap/Form";
function LoginLabel(props) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{props.text}</Form.Label>
      <Form.Control
        onChange={(e) =>
          props.setUser({ ...props.user, [props.type]: e.target.value })
        }
        type={props.type}
        placeholder={`Enter ${props.type}`}
      />
    </Form.Group>
  );
}

export default LoginLabel;
