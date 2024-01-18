import React from "react";
import "../App.css";

export default function Display(task) {
  let input = task.tododata;

  const handlecolour = (key) => {
    task.changeTextColor(key, "black");
  };

  let newinput = input.map((e) => {
    return (
      <div key={e.todokey} className="list">
        <input
          className="newinput"
          type="text"
          value={e.tododescription}
          style={{ color: e.textColor || "red" }}
          onChange={(el) => {
            task.handleUpdate(el.target.value, e.todokey);
          }}
        />
        <button
          onClick={() => handlecolour(e.todokey)}
        >
          Confirm edit
        </button>
        <button
          onClick={() => {
            task.handleDelete(e.todokey);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return <div>{newinput}</div>;
}
