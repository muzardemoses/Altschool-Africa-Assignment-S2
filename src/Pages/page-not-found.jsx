import React from "react";
import '../Assets/styles/page-not-found.css';
import errorGif from '../Assets/images/piffle-error.gif';


export const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404 Error</h1>
      <h1>Page Not Found</h1>
      <img src={errorGif} alt="404 Error" />
    </div>
  );
}

