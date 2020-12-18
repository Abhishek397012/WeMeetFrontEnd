import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import CommunityDashboard from './components/Navneet Singh/CommunityDashboard';
import WeMeets from './components/Navneet Singh/WeMeets';


const App = ()=>{
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={CommunityDashboard}></Route>
          <Route exact path="/wemeets" component={WeMeets}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
