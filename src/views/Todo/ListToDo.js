import React from "react";
import "./ListToDo.scss";
import AddToDo from "./AddToDo";
import { toast } from "react-toastify";

class ListToDo extends React.Component {
  state = {
    listToDo: [
      // {
      //   id: "todo1",
      //   title: "Doing homework",
      // },
      // {
      //   id: "todo2",
      //   title: "Making video",
      // },
      // {
      //   id: "todo3",
      //   title: "Fixing bug",
      // },
    ],
    editToDo: {},
  };

  addNewToDo = todo => {
    this.setState({
      listToDo: [...this.state.listToDo, todo],
    });

    toast.success("Add Todo Success!");
  };

  EditToDo = todo => {
    let { listToDo, editToDo } = this.state;
    let isEmptyObj = Object.keys(editToDo).length === 0;

    // save
    if (isEmptyObj === false && editToDo.id === todo.id) {
      let listToDoCoPy = [...listToDo];

      let objIndex = listToDoCoPy.findIndex(item => item.id === todo.id);

      //Update object's name property.
      listToDoCoPy[objIndex].title = editToDo.title;

      this.setState({
        listToDo: listToDoCoPy,
        editToDo: {},
      });
      toast.success("Updated Todo Success!");
      return;
    }

    // edit
    this.setState({
      editToDo: todo,
    });
  };

  handleOnChangeEditToDo = event => {
    let editToDoCoPy = { ...this.state.editToDo };
    editToDoCoPy.title = event.target.value;
    this.setState({
      editToDo: editToDoCoPy,
    });
  };

  DeleteToDo = todo => {
    let currentToDo = this.state.listToDo;
    currentToDo = currentToDo.filter(item => item.id !== todo.id);
    this.setState({
      listToDo: currentToDo,
    });
    toast.success("Deleted Success!");
  };
  render() {
    let { listToDo, editToDo } = this.state;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    return (
      <div className="List-todo-container">
        <AddToDo addNewToDo={this.addNewToDo} />

        <div className="list-todo-content">
          {listToDo &&
            listToDo.length > 0 &&
            listToDo.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <h3>
                      {index + 1} - {item.title}
                    </h3>
                  ) : (
                    <>
                      {editToDo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input value={editToDo.title} onChange={event => this.handleOnChangeEditToDo(event)} />
                        </span>
                      ) : (
                        <h3>
                          {index + 1} - {item.title}
                        </h3>
                      )}
                    </>
                  )}
                  <div className="update">
                    <button className="edit cursor" onClick={() => this.EditToDo(item)}>
                      {isEmptyObj === false && editToDo.id === item.id ? "Save" : "Edit"}
                    </button>

                    {/* <button className=" cursor">Save</button> */}

                    <button className="delete cursor" onClick={() => this.DeleteToDo(item)}>
                      Delete
                    </button>
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
