import React from "react";

class MyComponent extends React.Component {
  //key: value
  // bản chất state giúp cập nhật lại dữ liệu mà các bạn không cần f5
  state = {
    name: "Baobao",
    fb: "fb.com/zabaoit",
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
        <div className="first">Hello My Components, My name is {this.state.name} </div>
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
