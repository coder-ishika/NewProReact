import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Home from './Components/Home';


const App = () => {
    return (
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<SignIn />} />
          </Routes>
        </Router>
      );
    };

export default App;