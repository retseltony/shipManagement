import React from 'react';
import "bootswatch/dist/flatly/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
//import ShipsContainer from '../../ships/infrastructure/ShipsContainer';
import {
  RecoilRoot
} from 'recoil';
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
