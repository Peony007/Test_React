import React from 'react';
import AboutBtn from './AboutBtn';
// import ImgPerson from '../assets/img/person.svg'
import '../assets/styles/home.css'
// import './App.css';

function Content() {
  return (
    <div className="Content">
      <div className="col-xl-4 col-md-4 col-sm-4 content_left ">
        <p className="top_text animate__animated animate__fadeInRight animate__delay-0.5s">LOREM IPSUM</p>
        <div className="middle_text animate__animated animate__fadeInRight animate__delay-1s">
          <p className="middle_text">Title Text:</p>
          <p className="middle_text">About 1</p>

        </div>
        <p className="bottom_text animate__animated animate__fadeInRight animate__delay-2s">
          Content text 1: Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua. </p>
        <div className="content_btn content_right animate__animated animate__bounceInRight animate__delay-3s">
          <AboutBtn className="about1" text="About1" />
          <AboutBtn className="about1" text="About2" />

        </div>
      </div>
      <div className="col-xl-6 col-md-6 col-sm-6 content_right animate__animated animate__bounceInRight animate__delay-3s">
        <img src="person.svg" className="ImgPerson"  alt="ImagePerson" />
      </div>
    </div>
    
  );
}

export default Content;