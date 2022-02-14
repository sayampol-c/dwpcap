import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './Logingoogle';
import App from './App';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet,
    useParams,
    NavLink,
    useNavigate,
    useLocation
} from 'react-router-dom';
import Logingoogle from './Logingoogle';


ReactDOM.render(  
    <Router>
       <Routes>
           <Route path="/" element={<Navigate replace to="/login" />} />  
           <Route path="/login" element={<Logingoogle />} />  
           <Route path="/app" element={<App />} />
       
       
       
       </Routes>
    </Router>
     
   ,
  document.getElementById('root')
);
