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
            <div className="job-lists">
              {arrJobs.map(item => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
