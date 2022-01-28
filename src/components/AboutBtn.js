import React from 'react';
import '../assets/styles/home.css'
// import './App.css';
// let text = props.text;

const AboutBtn = (props) => {
    let text = props.text
  return (
    <div className="AboutBtn">
        <span className="about">{text}</span>
    </div>
  );
}

export default AboutBtn;