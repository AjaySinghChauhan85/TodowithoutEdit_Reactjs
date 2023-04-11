import React, { useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  // const editItem = (key,item) => {
  //   const editTodo = listTodo.find((i, index) => index === key);
  //   // setEditable(editTodo !== undefined);
  // };

  // const handleChange = (value) => {
  //   console.log(">>>>>", value);
  // };
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo &&
          listTodo.length > 0 &&
          listTodo.map((listItem, i) => {
            return (
              <TodoList
                key={i}
                index={i}
                item={listItem}
                deleteItem={deleteListItem}
                // editItem={editItem}
                // editable={editable}
                // _handleChange={handleChange}
              />
            );
          })}
      </div>
    </div>
  );
}
export default App;
