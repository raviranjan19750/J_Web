import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css'
import Footer from './components/Footer';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App dark-theme">

      <Header />
      <Switch>
        <HomePage />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
