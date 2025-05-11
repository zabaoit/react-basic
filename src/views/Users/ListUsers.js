import React from "react";
import axios from "axios";
import "./ListUsers.scss";
class ListUsers extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    // axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
    //   console.log(">>> check: ", res.data);
    // });

    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({
      listUsers: res && res.data,
    });
  }

  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <h4 className="title">Fetch all list users</h4>
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div className="child">
                  {index + 1} - {item.username} - {item.email}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListUsers;
