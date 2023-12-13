import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashbaord from './Dashboard';
import CreateProject from './CreateProject';
import ProjectList from './ProjectList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Login/> */}
  <BrowserRouter>
    <Routes>
      <Route path='/ProjectManagement' element={<Login/>}/>
      <Route path='/ProjectManagement/Dashboard' element={<Dashbaord/>}/>
      <Route path='/ProjectManagement/Project-List' element={<ProjectList/>}/>
      <Route path='/ProjectManagement/Create-Project' element={<CreateProject/>}/>
    </Routes>
    </BrowserRouter>

  
  </React.StrictMode>
);