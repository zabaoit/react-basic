import React from "react";

import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  render() {
    console.log(">>> check redux", this.props.dataRedux);
    // HOC
    return (
      <>
        <div>Hello word from HomePage </div>
      </>
    );
  }
}

/////

const mapStateToProps = state => {
  return { dataRedux: state.users };
};

export default connect(mapStateToProps)(Home);
