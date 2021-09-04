import React from "react";

function ItemText(props) {
  const item = props.item;
  return (
    <div className="boxsizingBorder">
      <textarea
        type="text"
        rows="4"
        cols="30"
        onChange={(e) =>
          props.setItem({ ...item, [props.type]: e.target.value })
        }
        suppressContentEditableWarning={true}
        contentEditable={props.editable}
      >
        {props.content}
      </textarea>
    </div>
  );
}
export default ItemText;
