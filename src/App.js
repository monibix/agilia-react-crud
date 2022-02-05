import { Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import UserDetails from './views/UserDetails';
import EditUser from './views/EditUser';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/:userId">
        <UserDetails />
      </Route>
      <Route exact path="/:userId/edit">
        <EditUser />
      </Route>
    </Switch>
  );
}

export default App;
