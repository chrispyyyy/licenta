import { connect } from "react-redux";
import { Navigation } from "../../components/Navigation";
import { loggedUserSelector } from "../../selectors/loggedUserSelector";
import { logOutUserAction } from "../../actions/loginActions";

const mapStateToProps = state => ({
  loggedUser: loggedUserSelector(state)
});

const mapDispatchToProps = {
  logOut: logOutUserAction
};

export const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
