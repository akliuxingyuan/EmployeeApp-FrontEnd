import logo from './logo.svg';
import './App.css';

import { Home } from './Components/Home'
import { Department } from './Components/Department'
import { Employee } from './Components/Employee'
import { Navigation } from './Components/Navigation'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p>hello world</p>
      </div>
      <Navigation />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/department' component={Department} />
        <Route path='/employee' component={Employee} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
