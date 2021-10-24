import React, { useEffect } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Trusted from './Components/Trusted'
import Testimonial from './Components/Testimonial'
import Persona from './Components/Persona';
import Footer from './Components/Footer';
import PricingPage from './Components/PricingPage'

function App() {
 
  return (
    // <Router>
    <div className="App">
     <Nav/>

    <Switch>
    <Route exact path="/">
      <>

     <Hero />
     <Section2 />
     <Section3 />
     <Trusted />
     <Testimonial />
     <Persona />
     </>
     </Route>

     <Route exact path='/pricing'>
      <PricingPage />
     </Route>

     </Switch>
  

     <Footer />
    </div>
        
  
    // </Router>

  );
}

export default App;
