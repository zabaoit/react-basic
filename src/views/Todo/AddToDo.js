import React from "react";
import { toast } from "react-toastify";

class AddToDo extends React.Component {
  state = {
    title: "",
  };

  handleOnChange = event => {
    // event.preventDefault();

    this.setState({
      title: event.target.value,
    });
  };

  handleOnClick = () => {
    if (!this.state.title) {
      toast.error("Error!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    };

    this.props.addNewToDo(todo);

    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input type="text" value={title} onChange={event => this.handleOnChange(event)} />
        <button className="add cursor" onClick={() => this.handleOnClick()}>
          Add
        </button>
      </div>
    );
  }
}

export default AddToDo;
