import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Homee from './components/Homee';
import Footer from './components/Footer';
import MortgageCal from './components/MortgageCal';
import StartApproval from './components/StartApproval';
import About from './components/About';
import SignIn from './components/SignIn';


function App() {
  return (
    <div className="App">
      <Router>
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

function Main() {
  const location = useLocation();
  const showNav = location.pathname !== '/start-approval';

  return (
    <>
      {showNav && <Nav />}
      <Routes>
        <Route path='/' element={<Homee />} />
        <Route path='/calculator' element={<MortgageCal />} />
        <Route path="/start-approval" element={<StartApproval />} />
        <Route path='/about' element={<About/>}/>
        <Route path='signin' element={<SignIn/>}/>

      </Routes>
    </>
  );
}

export default App;
