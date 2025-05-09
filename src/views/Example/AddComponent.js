import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangeTitleJob = event => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalary = event => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubMit = event => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params!");
      return;
    }
    // console.log(">>> Check data input : ", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <form>
        <label>Job's </label>
        <input type="text" value={this.state.title} onChange={event => this.handleChangeTitleJob(event)} /> <br></br>
        <label>Salary </label>
        <input type="text" value={this.state.salary} onChange={event => this.handleChangeSalary(event)} /> <br></br>
        <button type="submit" onClick={event => this.handleSubMit(event)}>
          Submit
        </button>
      </form>
    );
  }
}

export default AddComponent;
