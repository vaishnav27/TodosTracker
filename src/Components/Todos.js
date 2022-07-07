import React from "react";
import TodoItems from "./TodoItem";

export default function Todos(props) {
  return (
    <div className="container my-4">
      <h3 className=" my-3">ToDo's List</h3>
      {props.todos.length === 0
        ? "No ToDo's to Display"
        : props.todos.map((todo) => {
            return (
              <>
                <TodoItems
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            );
          })}
    </div>
  );
}
