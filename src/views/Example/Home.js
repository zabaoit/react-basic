import React from "react";

import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  handleDeleteUser = user => {
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.addNewUser();
  };

  render() {
    console.log(">>> check redux", this.props.dataRedux);

    let listUsers = this.props.dataRedux;

    return (
      <>
        <div>Hello word from HomePage </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>X</span>
                </div>
              );
            })}
        </div>
        <button onClick={() => this.handleCreateUser()}>Add new</button>
      </>
    );
  }
}

/////

const mapStateToProps = state => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUserRedux: userDelete => dispatch({ type: "DELETE_USER", payload: userDelete }),
    addNewUser: () => dispatch({ type: "CREATE_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
