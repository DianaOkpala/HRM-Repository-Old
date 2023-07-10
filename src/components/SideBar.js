import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';

export default props => {
  return (
   
    <Menu>
         <br/>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/employees">
        Employees
      </a>
      <a className="menu-item" href="/leave">
        Leave
      </a>
      <a className="menu-item" href="/payroll">
        Payroll
      </a>
      <a className="menu-item" href="/documents">
        Employee Documents
      </a>
      <a className="menu-item" href="/recruitment">
        Employee Recruitment
      </a>
    </Menu>
  );
};