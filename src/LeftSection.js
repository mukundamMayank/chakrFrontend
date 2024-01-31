// LeftSection.js

import React, { useEffect } from 'react';
import './LeftSection.css';
import SearchBar from './SearchBar.js';


function LeftSection() {
  // useEffect(() => {
  //   const linkElement = document.createElement('link');
  //   linkElement.rel = 'stylesheet';
  //   linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
  //   linkElement.integrity = 'sha512-/JOZ5qDOoJqR1PGSSwTc74PlVmzBCRfL9Bu90EKpQ4yYeNyE1J+yON9Ad4+Jlgvpuv2bUjNlqC4UjqshbdPZhQ==';
  //   linkElement.crossorigin = 'anonymous';
  //   linkElement.referrerpolicy = 'no-referrer';

  //   document.head.appendChild(linkElement);

  //   return () => {
  //     document.head.removeChild(linkElement);
  //   };
  // }, []);
  return (
    <div className="left-section">

      <div className="upper-half">
        <h2>Orangefarm</h2>
        {/* Search Bar */}
        <div className="search-bar">
          <SearchBar placeholder="Search..."  />

        </div>

        {/* Dashboard */}
        <div className="menu-item">
          <i className="fas fa-tachometer-alt"></i><span className="menu-text">Dashboard</span>
        </div>

        {/* Customers */}
        <div className="menu-item">
          
          <i className="fas fa-users"></i><span className="menu-text">Customers</span>
          {/* Add a dropdown icon */}
          <i className="fas fa-caret-down dropdown"></i>
        </div>

        <div className="menu-item">
          <i className="fas fa-chart-bar"></i><span className="menu-text">All Reports</span>
        </div>
        
      </div>

      <div className="bottom">
        <div className="profile">
          <img src="profile-photo.jpg" />
          <div className="text">
            <p className="username">User Name</p>
            <p className="designation">Designation</p>
          </div>
        </div>
        <div className="actions">
        <div>
          <i className="fas fa-cogs"></i> Settings
        </div>
        <div>
          <i className="fas fa-sign-out-alt"></i> Logout
        </div>
      </div>
      </div>



      
      
    </div>
  );
}

export default LeftSection;
