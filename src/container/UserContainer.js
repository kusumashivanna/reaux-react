import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Test from "../Test.js";
import { GetUser } from "../action/Useraction.js";

const mapDispatchToProps = dispatch => {
  return {
    GetUsers: () => {
      dispatch(GetUser());
    }
  };
};
const mapStateToProps = state => {
  return {
    UserData: state
  };
};

const UserConatiner = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Test)
);
export default UserConatiner;
