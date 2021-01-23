import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../LogIn/apiLogin";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = isAuthenticated();

  return (
    <Route
      {...rest}
      render={() => {
        if (user) {
          return <Component />;
        } else {
          return <Redirect to={{ pathname: "/error" }} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
