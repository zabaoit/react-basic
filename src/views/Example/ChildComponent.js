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
    // key: value
    let { arrJobs } = this.props;
    return (
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
      </>
    );
  }
}

export default ChildComponent;
