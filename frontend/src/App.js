import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Navbar from './components.js/Navbar';
import Home from './components.js/Home';
import EmployeeList from './components.js/EmployeeList';
import SignInPage from './components.js/SignInPage';
import ShowEmployee from './components.js/showEmployee';

function App() {
  return (
      <Router>
        <AuthProvider>
          <Navbar />
            <Routes>
            <Route path='/' element={<SignInPage />} />
            <Route path='/dashboard' element ={<Home />} />
            <Route path='/employeeList' element ={<EmployeeList />} />
            <Route path='/signin' element ={<SignInPage />} />
            <Route path='/showEmployeeList' element= {<ShowEmployee />} />
            {/* <Route path='/createEmployee' element= {} /> */}
          </Routes>         
        </AuthProvider>
      </Router>
  );
}

export default App;
