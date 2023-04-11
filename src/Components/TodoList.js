import React, { useState } from "react";

function TodoList(props) {
  const [editable, setEditable] = useState(false);
  const { deleteItem, item, index } = props;
  const handleEditing = () => {
    setEditable(true);
  };
  let viewMode = {};
  let editMode = {};
  if (editable) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  return (
    <li className="list-item">
      {item}
      <span className="icons">
        <i
          className="fa-regular fa-trash-can icon-delete"
          onClick={(e) => {
            deleteItem(index);
          }}
        ></i>
        <i
          className="fa-solid fa-pen-to-square icon-edit"
          onClick={handleEditing}
        ></i>
        <input style={{ editMode }} type="text" value={item}  onChange={(e) => console.log(e.target.value)}/>
      </span>
    </li>
  );
}

export default TodoList;
