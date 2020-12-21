import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage'

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
