import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = job => {
    console.log(">>> handleOnClickDelete: ", job);
    this.props.deleteAJob(job);
  };
  render() {
    // console.log(">>> Check props: ", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    // key: value
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs ? "showJobs = true" : "showJobs = false";
    console.log(">>> check: ", check);
    return (
      <>
        {!showJobs ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide </button>
            </div>
            <div className="job-lists">
              {arrJobs.map(item => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}$ <></> <span onClick={() => this.handleOnClickDelete(item)}>X</span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
