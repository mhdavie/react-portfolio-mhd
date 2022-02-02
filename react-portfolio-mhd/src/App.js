import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
// import Header from './components/Header';
// import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About"


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={About}/>
        <Route path="/about" component={About}/>
      </Router>
    </div>
  );
}

export default App;