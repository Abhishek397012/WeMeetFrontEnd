import { Route, Switch } from "react-router-dom";

import CommunityDashboard from "./components/Navneet Singh/CommunityDashboard";
import WeMeets from "./components/Navneet Singh/WeMeets";
import Profile from "./components/Navneet Singh/Profile";
import NavBar from "./components/Nitish/NavBar";
import LandingPage from "./components/Nitish/LandingPage.jsx";
import BasicInfo from "./components/Navneet Singh/WeMeetSummary/BasicInfo";
import SessionsPage from "./components/Hardik/Sessions/SessionsPage";
import SpeakersHosts from "./components/Navneet Singh/WeMeetSummary/SpeakersHosts";
import RegistrantsPage from "./components/Hardik/Registrants/RegistrantsPage";
import EditProfile from "./components/Navneet Singh/EditProfile";
import ErrorAccessDenied from "./components/Hardik/ErrorAccessDenied/ErrorAccessDenied";

import { isAuthenticated } from "./components/Hardik/LogIn/apiLogin";

import "./App.css";

const App = () => {
  const { user } = isAuthenticated();

  return (
    <div className="App">
      <NavBar />
      <div style={{ marginTop: "70px" }}>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          {user && (
            <>
              <Route
                exact
                path="/dashboard"
                component={CommunityDashboard}
                condition={!true}
              ></Route>
              <Route exact path="/wemeets" component={WeMeets}></Route>
              <Route exact path="/profile" component={Profile}></Route>
              <Route exact path="/editProfile" component={EditProfile}></Route>
              <Route
                exact
                path="/wemeets/:wemeetId/summary"
                component={BasicInfo}
              />
              <Route
                exact
                path="/wemeets/:wemeetId/sessions"
                component={SessionsPage}
              ></Route>
              <Route
                exact
                path="/wemeets/:wemeetId/speakers"
                component={SpeakersHosts}
              ></Route>
              <Route
                exact
                path="/wemeets/:wemeetId/registrants"
                component={RegistrantsPage}
              ></Route>
            </>
          )}
          <Route path="*" component={ErrorAccessDenied}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
