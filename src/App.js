import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommunityDashboard from "./components/Navneet Singh/CommunityDashboard";
import WeMeets from "./components/Navneet Singh/WeMeets";
import Profile from "./components/Navneet Singh/Profile";
import EditProfile from "./components/Navneet Singh/EditProfile";
import WeMeetSummary from './components/Navneet Singh/WeMeetSummary/WeMeetSummary'
import "./App.css";

// import CreateWeMeetForm from "./components/Hardik/CreateWeMeetForm/CreateWeMeetForm";
import NavBar from "./components/Hardik/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/dashboard" component={CommunityDashboard}></Route>
          <Route exact path="/wemeets" component={WeMeets}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/editProfile" component={EditProfile}></Route>
          <Route exact path="/wemeets/:wemeetId" component={WeMeetSummary}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
