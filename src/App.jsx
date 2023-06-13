import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';

import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'

class App extends Component {
    constructor(props){
        super()
        // const {window_width} = props
        this.state ={
            background: 'transparent'
        }
    }

    listenScrollEvent = e => {
        // console.log(window.scrollY)
        if (window.scrollY > 600 && window.scrollY <1199) {
          this.setState({background: '#2E3239'})
        } 
        else if(window.scrollY > 1200 && window.scrollY <1600) {
            this.setState({background: '#26292B'})
        }
        else if (window.scrollY > 1800 && window.scrollY <2700) {
            this.setState({background: '#2E3239'})
        } 
        else {
          this.setState({background: 'transparent'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }

    render() { 
        // console.log(this.state.background)
        const scrollToHome = () => {
            const section = document.querySelector( '#home-id' );
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        };
        const scrollToAbout = () => {
            const section = document.querySelector( '#about-id' );
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        };
        const scrollToSkills = () => {
            const section = document.querySelector( '#skills-id' );
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        };
        const scrollToEduc = () => {
            const section = document.querySelector( '#educ-id' );
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        };
        const scrollToContact = () => {
            const section = document.querySelector( '#contact-id' );
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        };

        return (
            <div className='main-div'>
                <header style={this.state}>
                    <img id="logo-img" src={require('./imgs/icon.png')} alt="icon-img" />
                    <nav style={this.state.nav_style}>
                        <button onClick={scrollToHome} id="home-btn"> Home </button>
                        <button onClick={scrollToAbout} id="about-btn"> About </button>   
                        <button onClick={scrollToSkills} id="skills-btn"> Skills </button>   
                        <button onClick={scrollToEduc} id="educ-btn"> Projects </button>   
                        <button onClick={scrollToContact} id="contact-btn"> Contact </button>   
                    </nav>
                </header>

                <Home />
                <About />
                <Skills />
                <Project />
                <Contact />

            </div>
        );
    }
}
 
export default App;