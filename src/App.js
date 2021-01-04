import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommunityDashboard from "./components/Navneet Singh/CommunityDashboard";
import WeMeets from "./components/Navneet Singh/WeMeets";
import Profile from "./components/Navneet Singh/Profile";
import NavBar from "./components/Nitish/NavBar";
import LandingPage from "./components/Nitish/LandingPage.jsx";
import BasicInfo from './components/Navneet Singh/WeMeetSummary/BasicInfo'
import Sessions from './components/Navneet Singh/WeMeetSummary/Sessions'
import SpeakersHosts from './components/Navneet Singh/WeMeetSummary/SpeakersHosts'
import Registrants from './components/Navneet Singh/WeMeetSummary/Registrants'

import "./App.css";

const App = () => {
  return (        
  <Router>
    <div className="App">
      <NavBar />
      <div style={{ marginTop: "70px" }}>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route
              exact
              path="/dashboard"
              component={CommunityDashboard}
            ></Route>
            <Route exact path="/wemeets" component={WeMeets}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route
              exact
              path="/wemeets/:wemeetId/summary"
              component={BasicInfo}
            ></Route>
            <Route
              exact
              path="/wemeets/:wemeetId/sessions"
              component={Sessions}
            ></Route>
            <Route
              exact
              path="/wemeets/:wemeetId/speakers"
              component={SpeakersHosts}
            ></Route>
            <Route
              exact
              path="/wemeets/:wemeetId/registrants"
              component={Registrants}
            ></Route>
          </Switch>
      </div>
    </div>
  </Router>
  );
};

export default App;
