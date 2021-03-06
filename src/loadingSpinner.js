import './App.css';
import React from "react";

function LoadingSpinner() {
  return (
    <div className="mx-5 mt-5 px-5 pt-5 d-flex justify-content-center align-items-center">
      
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;