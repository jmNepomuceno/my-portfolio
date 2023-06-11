import React from 'react';

class Skills extends React.Component {
    constructor(props){
        super()
        // const window_width = window.innerWidth
        this.state ={
        }
    }

    render() { 
        return (
            <div className='skills-div' id="skills-id">
    
                <h2 id="title-h2">Skills</h2>
                <hr/>
            
                <div id='one-div'>
                    <h2 id="front-end-h2">Front-End Tools</h2>
                    <div id='tools-txt-div'>
                            <h3>HTML5</h3>
                            <h3>CSS3</h3>
                            <h3>JavaScript</h3>
                            <h3>React</h3>
                    </div>
                    <div id='tools-img-div'>
                        <img src={require('../imgs/html-icon.png')} alt="icon-img" />
                        <img src={require('../imgs/css-icon.png')} alt="icon-img" />
                        <img src={require('../imgs/js-icon.png')} alt="icon-img" />
                        <img src={require('../imgs/react-icon.png')} alt="icon-img" />
                    </div>
                </div>

                <div id='two-div'>
                    <h2 id="front-end-h2">Back-End & Database Tools</h2>
                    <div id='tools-txt-div'>
                            <h3>Node.JS</h3>
                            <h3>MySQL</h3>
                    </div>
                    <div id='tools-img-div'>
                        <img src={require('../imgs/nodejs-icon.jpg')} alt="icon-img" />
                        <img src={require('../imgs/mysql-icon.png')} alt="icon-img" />
                    </div>
                </div>

                <div id='three-div'>
                    <h2 id="front-end-h2">Other Libaries/Frameworks</h2>
                    <div id='tools-txt-div'>
                            <h3>Bootstrap</h3>
                            <h3>Express</h3>
                    </div>
                    <div id='tools-img-div'>
                        <img src={require('../imgs/bootstrap-icon.png')} alt="icon-img" />
                        <img src={require('../imgs/express-icon.png')} alt="icon-img" />
                    </div>
                </div>

                <div id='four-div'>
                    <h2 id="front-end-h2">Tools / IDE</h2>
                    <div id='tools-txt-div'>
                            <h3>VS Code</h3>
                            <h3>GIT</h3>
                            <h3>Figma</h3>
                    </div>
                    <div id='tools-img-div'>
                        <img src={require('../imgs/vscode-icon.png')} alt="icon-img" />
                        <img src={require('../imgs/git-icon.png')} alt="icon-img" />
                        <img src={require('../imgs/figma-icon.png')} alt="icon-img" />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Skills;