import React from 'react';
import './ProjectManagement.css';
import iocDash  from './logos/Dashboard.svg';
import iocPlist  from './logos/Project-list.svg';
import iocClist  from './logos/create-project.svg';
import iocLogout  from './logos/Logout.svg';
import HeaderBG  from './logos/Header-bg.svg';
import { Link } from 'react-router-dom';

export default function ProjectManagement() {
  return (
    <>
    <div className='sitePage'>
    <div className='Navbar'>
    <div className='navBtns'>
    <Link to="/ProjectManagement/Dashboard"><img className='iconBtn' src={iocDash} alt='Dashboard' /></Link>
    <Link to="/ProjectManagement/Project-List"><img className='iconBtn' src={iocPlist} alt='ProjectList'/></Link>
    <span id='dashicon'>——</span>
    <Link to="/ProjectManagement/Create-Project"><img className='iconBtn' src={iocClist} alt='Create List'/></Link>
    </div>
    <Link to="/ProjectManagement"><img className='iconBtn' id='Logout-icon'src={iocLogout} alt='Logout'/></Link>   
    </div>
    <div className='DivContent'>
    <img id='HeaderBG' src={HeaderBG} alt='./logos/Header-bg.svg'/>
    </div>
    </div>
    </>
  )
}
