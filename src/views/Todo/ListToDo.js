import React from "react";
import "./ListToDo.scss";
import AddToDo from "./AddToDo";
import { toast } from "react-toastify";

class ListToDo extends React.Component {
  state = {
    listToDo: [
      {
        id: "todo1",
        title: "Doing homework",
      },
      {
        id: "todo2",
        title: "Making video",
      },
      {
        id: "todo3",
        title: "Fixing bug",
      },
    ],
  };

  addNewToDo = todo => {
    this.setState({
      listToDo: [...this.state.listToDo, todo],
    });

    toast.success("Success!");
  };
  render() {
    let { listToDo } = this.state;
    return (
      <div className="List-todo-container">
        <AddToDo addNewToDo={this.addNewToDo} />

        <div className="list-todo-content">
          {listToDo &&
            listToDo.length > 0 &&
            listToDo.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <h3>
                    {index + 1} - {item.title}
                  </h3>
                  <div className="update">
                    <button className="edit cursor">Edit</button>
                    <button className="delete cursor">Delete</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListToDo;
