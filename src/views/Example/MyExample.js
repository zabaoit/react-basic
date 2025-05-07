import React from "react";

class MyComponent extends React.Component {
  //key: value
  // bản chất state giúp cập nhật lại dữ liệu mà các bạn không cần f5
  state = {
    name: "",
    fb: "fb.com/zabaoit",
  };

  handleOnChangeName = event => {
    //this.state.name = event.target.value; // bad code
    // merge
    this.setState({
      name: event.target.value,
    });
  };

  handleClickButton = () => {
    alert("Hello World");
  };

  /* 
  JSX => return block
  fragment
  */
  render() {
    // let name = "Baobao";
    return (
      // <></>
      <React.Fragment>
        {/* <div className="abc"> */}
        <div className="first">
          <input value={this.state.name} type="text" onChange={event => this.handleOnChangeName(event)}></input>
          My name is {this.state.name}{" "}
        </div>
        <div className="second">facebook: {this.state.fb}</div>
        <div className="third">
          <button onClick={() => this.handleClickButton()}>Click me</button>
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default MyComponent;
