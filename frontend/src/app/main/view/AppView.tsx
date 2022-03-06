import React from 'react';
import "bootswatch/dist/flatly/bootstrap.min.css";
import './App.css';
import NavBar from './NavBar';
import ShipManagement from '../../ships/views/ShipManagement';

function App() {
  return (    
    <div className="App">
      <NavBar/>
      <ShipManagement/>
    </div>
  );
}

export default App;
