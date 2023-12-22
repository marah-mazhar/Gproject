import React from 'react'
import Sidebar from '../components/Sidebar';
import "../styles/Dataset.css";

function Dataset() {
    return (
        <div className="Dataset">
          <Sidebar />
          <div className="DatasetContent">
            <h1>Dataset Page</h1>
            {/* Other content for the Products page */}
            {/* ... */}
          </div>
        </div>
      );
}

export default Dataset
