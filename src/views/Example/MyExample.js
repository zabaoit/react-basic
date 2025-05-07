import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChangeFirstName = event => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = event => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubMit = event => {
    event.preventDefault();
    console.log(">>> Check data input : ", this.state);
  };

  /* 
  JSX => return block
  fragment
  */
  render() {
    return (
      <>
        <form>
          <label>First Name </label>
          <input type="text" onChange={event => this.handleChangeFirstName(event)} /> <br></br>
          <label>Last Name </label>
          <input type="text" onChange={event => this.handleChangeLastName(event)} /> <br></br>
          <button type="submit" onClick={event => this.handleSubMit(event)}>
            Submit
          </button>
        </form>

        <ChildComponent name={"Child one"} />
        <ChildComponent name={"Child two"} />
        <ChildComponent name={"Child three"} />
      </>
    );
  }
}

export default MyComponent;
