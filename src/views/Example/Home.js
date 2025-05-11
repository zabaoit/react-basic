import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  render() {
    console.log(">>> check", this.props);
    // HOC
    return (
      <>
        <div>Hello word from HomePage </div>
      </>
    );
  }
}

export default withRouter(Home);
