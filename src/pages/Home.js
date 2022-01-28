import React from 'react';
// import logo from './logo.svg';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import '../assets/styles/home.css';

function Home() {
  return (
    <div className="home">
        <div className="main_page">
        <Navbar className="page"/>
        <Content />
        </div>
        <Footer />
    </div>
  );
}

export default Home;
