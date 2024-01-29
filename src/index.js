import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NousConnaitre from './Components/NousConnaitre/NousConnaitre';
import NosMissions from './Components/NosMissions/NosMissions';
import Headers from './Components/Home/Header';
import Footer from './Components/Home/Footer';
import Team from './Components/Team/Team';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Router>
<Headers />
<Routes>
{/* <Route  path='/' element={<Welcome/>}/> */}
<Route  path='home' element={<App/>}/>
<Route  path='missions' element={<NosMissions/>}/>
<Route  path='connaitre' element={<NousConnaitre/>}/>
<Route  path='team' element={<Team/>}/>

</Routes>
<Footer /> 

   </Router> 
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
