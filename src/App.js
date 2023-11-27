import './App.css';
import Footer from './Components/Footer';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import LoginForm from './Components/LoginForm/LoginForm';
import Registration from './Components/Registration/Registration';
import PharmacyWebsite from './Components/PharmacySell/PharmacyWebsite';

function App() {
  return(
    <div>
  <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pharmacy_selling" element={<PharmacyWebsite/>}/>
        <Route path="/signup" element={<LoginForm />} />
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </Router>
  <Footer/>
    </div>
  );
}

export default App;
