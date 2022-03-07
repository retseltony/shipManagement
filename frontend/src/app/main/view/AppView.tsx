import React, { Suspense } from 'react';
import "bootswatch/dist/flatly/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import NavBar from './NavBar';
import ShipManagement from '../../ships/views/ShipManagement';
//import ShipsContainer from '../../ships/infrastructure/ShipsContainer';
import {
  RecoilRoot
} from 'recoil';
import Loading from './Loading';
import MainContent from './MainContent';
function App() {
  return (  
    
      <div className="App">
        <RecoilRoot  >
          <MainContent/>                     
        </RecoilRoot>
      </div>
    
  );
}

export default App;
