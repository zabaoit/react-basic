import React from "react";

class ChildComponent extends React.Component {
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
        <div>ChildComponent {this.props.name}</div>
      </>
    );
  }
}

export default ChildComponent;
