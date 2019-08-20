import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import User from "../USer.js";
import { GetUser } from "../action/User.action";

const mapDispatchToProps = dispatch => {
  return {
    GetUser: () => {
      dispatch(GetUser());
    }
  };
};
const mapStateToProps = state => {
  return {
    data: state
  };
};

const UserContainer= withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(User)
);
export default UserContainer;