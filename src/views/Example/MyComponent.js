import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      {
        id: 1,
        title: "Developers",
        salary: "500",
      },
      {
        id: 2,
        title: "Testers",
        salary: "400",
      },
      {
        id: 3,
        title: "Project Managers",
        salary: "1000",
      },
    ],
  };

  addNewJob = job => {
    // console.log(">>> check job: ", job);

    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteAJob = job => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter(item => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };
  /* 
  JSX => return block
  fragment
  */
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent arrJobs={this.state.arrJobs} deleteAJob={this.deleteAJob} />
      </>
    );
  }
}

export default MyComponent;
