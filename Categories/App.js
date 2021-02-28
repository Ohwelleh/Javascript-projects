import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo } from './pages/Reports';
import HeaderBar from './components/HeaderBar';
import PageRenderer from './PageRenderer'


function App() {
  return (
    <Router>
      <div className="App">
        <HeaderBar />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/Home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>

    // SideBar component.
    // <Router>
    //   <Sidebar />
    //   <Switch>
    //     <Route path="/overview" exact component= {Overview} />
    //     <Route path="/reports" exact component= {Reports} />
    //     <Route path="/reports/reports1" exact component= {ReportsOne} />
    //     <Route path="/reports/reports2" exact component= {ReportsTwo} />
    //   </Switch>
    // </Router>
  );
}

export default App;
