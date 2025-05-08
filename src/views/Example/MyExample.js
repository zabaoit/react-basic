import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      {
        id: 1,
        title: "Developers",
        salary: "500 $",
      },
      {
        id: 2,
        title: "Testers",
        salary: "400 $",
      },
      {
        id: 3,
        title: "Project Managers",
        salary: "1000 $",
      },
    ],
  };

  /* 
  JSX => return block
  fragment
  */
  render() {
    return (
      <>
        <AddComponent />

        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

export default MyComponent;
