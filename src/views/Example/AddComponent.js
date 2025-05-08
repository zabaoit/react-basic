import React from "react";

class AddComponent extends React.Component {
  state = {
    titleJob: "",
    salary: "",
  };
  handleChangeTitleJob = event => {
    this.setState({
      titleJob: event.target.value,
    });
  };

  handleChangeSalary = event => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubMit = event => {
    event.preventDefault();
    console.log(">>> Check data input : ", this.state);
  };
  render() {
    return (
      <form>
        <label>Job's </label>
        <input type="text" onChange={event => this.handleChangeTitleJob(event)} /> <br></br>
        <label>Salary </label>
        <input type="text" onChange={event => this.handleChangeSalary(event)} /> <br></br>
        <button type="submit" onClick={event => this.handleSubMit(event)}>
          Submit
        </button>
      </form>
    );
  }
}

export default AddComponent;
