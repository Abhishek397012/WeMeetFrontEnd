import { Route, Switch } from "react-router-dom";

import CommunityDashboard from "./components/Navneet Singh/CommunityDashboard";
import WeMeets from "./components/Navneet Singh/WeMeets";
import Profile from "./components/Navneet Singh/Profile";
import EditProfile from "./components/Navneet Singh/EditProfile";
import WeMeetSummary from "./components/Navneet Singh/WeMeetSummary/WeMeetSummary";
import NavBar from "./components/Nitish/NavBar";
import LandingPage from "./components/Nitish/LandingPage.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ marginTop: "70px" }}>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/dashboard" component={CommunityDashboard}></Route>
          <Route exact path="/wemeets" component={WeMeets}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/editProfile" component={EditProfile}></Route>
          <Route
            exact
            path="/wemeets/:wemeetId"
            component={WeMeetSummary}
          ></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
