import { Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import UserDetails from './views/UserDetails'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/:userId">
        <UserDetails />
      </Route>
    </Switch>
  );
}

export default App;
