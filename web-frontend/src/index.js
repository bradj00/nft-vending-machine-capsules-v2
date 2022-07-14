import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Manager from './components/Manager';
import CreateMachine from './components/CreateMachine';
import { MoralisProvider } from 'react-moralis';
import JudgePanel from './components/JudgePanel';







ReactDOM.render(
  <React.StrictMode>
    <Router>
    <MoralisProvider appId="1hFLCQEQW1BR1vgJ1hyAivIuHzlnD0GSPPiLhajv" serverUrl="https://y1gpn8k7i4ta.usemoralis.com:2053/server">
      <Routes>
        <Route path="/machine/:machineContractAddress" element={<App showManager={false} creatingMachine={false}/>} />
        <Route path='/manage/'     element={<App showManager={true}  creatingMachine={false}/>}/>
        <Route exact path='/'      element={<App showManager={true}  creatingMachine={false}/>}/>
        <Route path='/create/'     element={<App showManager={false} creatingMachine={true} />}/>
        <Route path='/judgePanel'  element={<JudgePanel />}/>
      </Routes>

    </MoralisProvider >
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
