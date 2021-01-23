import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "./components/Hardik/ProtectedRoute/ProtectedRoute";
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

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div style={{ marginTop: "70px" }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute
            exact
            path="/dashboard"
            component={CommunityDashboard}
          />
          <ProtectedRoute exact path="/wemeets" component={WeMeets} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/editProfile" component={EditProfile} />
          <ProtectedRoute
            exact
            path="/wemeets/:wemeetId/summary"
            component={BasicInfo}
          />
          <ProtectedRoute
            exact
            path="/wemeets/:wemeetId/sessions"
            component={SessionsPage}
          />
          <ProtectedRoute
            exact
            path="/wemeets/:wemeetId/speakers"
            component={SpeakersHosts}
          />
          <ProtectedRoute
            exact
            path="/wemeets/:wemeetId/registrants"
            component={RegistrantsPage}
          />
          <Route path="*" component={ErrorAccessDenied} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
