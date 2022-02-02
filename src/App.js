import React from 'react';
//import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import About from "./components/About"
// import Footer from './components/Footer';


function App() {
  return (
    <div>
      {/* <Router>
        <Route exact path="/" component={About}/>
        <Route path="/about" component={About}/>
        <Route path ="/" component = {Footer}/>
        <Route path ="/footer" component = {Footer}/>

      </Router> */}
        
      <Header />
      <Footer/>
    
    </div>
  );
}

export default App;