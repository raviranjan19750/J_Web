import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css'
//import { BrowserRouter as Route, Switch, Link } from 'react-router-dom'
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App dark-theme">
      <Header />
      <Switch>
        <HomePage />
      </Switch>

    </div>
  );
}

export default App;
