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
    console.log(">>> Check props: ", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    let { name, age } = this.props;
    return (
      <>
        <div>
          ChildComponent name: {name} - {age}
        </div>
      </>
    );
  }
}

export default ChildComponent;
