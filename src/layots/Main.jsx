import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Project from '../components/project/Project';
import Skills from '../components/skills/Skills';


const Main = () => {
    return (
        <div className="main">
            <Header/>
            <Skills/>
            <Project/>
            <Footer/>
        </div>
    );
}

export default Main;