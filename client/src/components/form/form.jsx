import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import FormLabel from "./formLabel";
function Post(props) {
  const [itemData, setItemData] = useState({
    name: props.loggedIn.name,
    img: "",
    description: "",
    price: "",
  });

  function handleSubmit() {
    axios.post("/marketplace/addItem", itemData);
  }
  return (
    <Form className="m-5" onSubmit={handleSubmit}>
      <FormLabel type="img" itemData={itemData} setItemData={setItemData} />
      <FormLabel
        type="description"
        itemData={itemData}
        setItemData={setItemData}
      />
      <FormLabel type="price" itemData={itemData} setItemData={setItemData} />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Post;
