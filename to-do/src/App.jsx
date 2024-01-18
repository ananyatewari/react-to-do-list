import React, { Component } from "react";
import "./App.css";
import Display from "./components/Display";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todolist: [],
      todo: {
        tododescription: "",
        todokey: "",
      },
    };
  }

  handleInput = (task) => {
    this.setState({
      todo: {
        tododescription: task.target.value,
        todokey: Date.now(),
      },
    });
  };

  handleSubmit = (task) => {
    task.preventDefault();
    let input = this.state.todo;
    if (input.tododescription !== "") {
      console.log(this.state.todo.todokey);
      let arr = [...this.state.todolist, input];
      this.setState({
        todolist: arr,
        todo: {
          tododescription: "",
          todokey: Date.now(),
        },
      });
    }
  };

  handleDelete = (key) => {
    let arr = this.state.todolist;
    let arrNew = arr.filter((e) => {
      return e.todokey != key;
    });
    this.setState({
      todolist: arrNew,
    });
  };

  handleUpdate = (task, key) => {
    let arr = this.state.todolist;
    arr.map((e) => {
      if (e.todokey == key) {
        e.tododescription = task;
        e.textColor = "red"
      }
    });
    this.setState({
      todolist: arr,
    });
  };

  changeTextColor = (key, color) => {
    const updatedList = this.state.todolist.map((item) => {
      if (item.todokey === key) {
        return {
          ...item,
          textColor: color,
        };
      }
      return item;
    });

    this.setState({
      todolist: updatedList,
    });
  };

  render() {
    return (
      <>
        <h1>TO DO LIST</h1>
        <h2>what's on your mind ?</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter here"
            onChange={this.handleInput}
            value={this.state.todo.tododescription}
          />
          <button type="submit">Add task</button>
        </form>
        <div id="current">{this.state.todo.tododescription}</div>
        <Display
          tododata={this.state.todolist}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
          changeTextColor={this.changeTextColor}
        />
      </>
    );
  }
}
