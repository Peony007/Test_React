import React from 'react';
import '../assets/styles/home.css'
// import './App.css';
// let text = props.text;

const navbarButton = (props) => {
    let text = props.text
  return (
    <div className="navbarButton">
        <span >{text}</span>
    </div>
  );
}

export default navbarButton;