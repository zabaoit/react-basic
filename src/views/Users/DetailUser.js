import axios from "axios";
import react from "react";
import { withRouter } from "react-router-dom";
class Detail extends react.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props && this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      this.setState({
        user: res && res.data ? res.data : {},
      });
      // console.log(">>> check res user: ", id);
    }
  }

  HandleBackButton = () => {
    this.props.history.push("/users");
  };

  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div>Hello World from detail user with id: {user.id}</div>
        {isEmptyObj === false && (
          <>
            <div>User's name: {user.username}</div>
            <div>User's email: {user.email}</div>
            <button style={{ cursor: "pointer" }} onClick={() => this.HandleBackButton()}>
              Back
            </button>
          </>
        )}
      </>
    );
  }
}

export default withRouter(Detail);
