import React from 'react';

class Project extends React.Component {
    constructor(props){
        super()
        // const window_width = window.innerWidth
        this.state ={
            imgUrl_PC : {
                1 : {
                    pc_A : "1_A_p.png",
                },
                2 : {
                    pc_A : "2_A_p.png",
                },
                3 : {
                    pc_A : "3_A_p.png",
                },
                4 : {
                    pc_A : "4_A_p.png",
                }
            },

            imgUrl_MO : {
                1 : {
                    mo_A : "mo_A_1.png",
                },
                2 : {
                    mo_A : "mo_A_2.png",
                },
                3 : {
                    mo_A : "mo_A_3.png",
                }
            },
            
            display_PC : {
                pc_A_1 : {
                    display: "none"
                },
                pc_A_2 : {
                    display: "none"
                },
                pc_A_3 : {
                    display: "none"
                },
                pc_A_4 : {
                    display: "none"
                },
                mo_A_1 : {
                    display: "none"
                },
                mo_A_2 : {
                    display: "none"
                },
                mo_A_3 : {
                    display: "none"
                }
            },
        }
    }

    handlePreview = (e) => {
        if(e === 1){
            let display_PC = {...this.state.display_PC}
            display_PC.pc_A_1.display = "block"
            display_PC.mo_A_1.display = "block"

            display_PC.pc_A_2.display = "none"
            display_PC.pc_A_3.display = "none"

            display_PC.mo_A_2.display = "none"
            display_PC.mo_A_3.display = "none"

            display_PC.pc_A_4.display = "none"


            this.setState({display_PC})
        }
        else if(e === 2){
            let display_PC = {...this.state.display_PC}
            display_PC.pc_A_1.display = "none"
            display_PC.mo_A_1.display = "none"

            display_PC.pc_A_2.display = "block"
            display_PC.pc_A_3.display = "none"

            display_PC.mo_A_2.display = "block"
            display_PC.mo_A_3.display = "none"

            display_PC.pc_A_4.display = "none"
            this.setState({display_PC})
        }
        else if(e === 3){
            let display_PC = {...this.state.display_PC}
            display_PC.pc_A_1.display = "none"
            display_PC.mo_A_1.display = "none"

            display_PC.pc_A_2.display = "none"
            display_PC.pc_A_3.display = "block"

            display_PC.mo_A_2.display = "none"
            display_PC.mo_A_3.display = "block"

            display_PC.pc_A_4.display = "none"
            this.setState({display_PC})
        }
        else if(e === 4){
            let display_PC = {...this.state.display_PC}
            display_PC.pc_A_1.display = "none"
            display_PC.mo_A_1.display = "none"

            display_PC.pc_A_2.display = "none"
            display_PC.pc_A_3.display = "none"

            display_PC.mo_A_2.display = "none"
            display_PC.mo_A_3.display = "none"

            display_PC.pc_A_4.display = "block"
            this.setState({display_PC})
        }
    }
    render() { 
        // console.log(this.state.display_PC.pc_A_1)
        // font-family:Verdana, Geneva, Tahoma, sans-serif;
    return (
            <div className='educ-div' id="educ-id">
                <section>
                    <h2 id="title-h2">Projects</h2>
                    <hr/>

                    <div className='container'>
                        <div className='card'>
                            <div id='info-div'>
                                <p>
                                    <span>A </span>website thesis project that will predict or compute the user's next
                                    blood glucose level based on his or her food intake and recent blood sugar level.  
                                </p>
                                <div id='tools'>
                                    <h3>React</h3>
                                    <h3>Node.js</h3>
                                    <h3>MySQL</h3>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='content'>
                                    <h2 id="num-id">01</h2>
                                    <h3 id="type-h3">Case Study</h3>
                                    <h4 id="proj-h4">Blood Glucose Regulator</h4>
                                    <button id="preview-btn" onClick={() => this.handlePreview(1)}>Preview</button>
                                    {/* <Link to="http:www.google.com"><button id="code-btn">Code</button></Link> */}
                                    <a id="code-btn" href="https://github.com/jmNepomuceno/blood-glucose-regulator">Code</a>

                                </div>
                            </div>
                        </div>

                        <div className='card'>
                            <div id='info-div'>
                                <p>
                                    <span>A </span> calendar scheduler for the user, whether to set a goal, task, meetings, etc.

                                </p>
                                <div id='tools'>
                                    <h3>HTML</h3>
                                    <h3>CSS</h3>
                                    <h3>React</h3>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='content'>
                                    <h2 id="num-id">02</h2>
                                    <h3 id="type-h3">Case Study</h3>
                                    <h4 id="proj-h4">Get Set GOal</h4>
                                    <button id="preview-btn" onClick={() => this.handlePreview(2)}>Preview</button>
                                    <a id="code-btn" href="https://github.com/jmNepomuceno/stm-web">Code</a>
                                </div>
                            </div>
                        </div>

                        <div className='card'>
                            <div id='info-div'>
                                <p>
                                    <span>A </span> simple inventory management system. Mainly for borrowing and returning items. It can also
                                    output a receipt for every item borrowed.

                                </p>
                                <div id='tools'>
                                    <h3>HTML</h3>
                                    <h3>CSS</h3>
                                    <h3>React</h3>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='content'>
                                    <h2 id="num-id">03</h2>
                                    <h3 id="type-h3">Solo Project</h3>
                                    <h4 id="proj-h4">Inventory Management</h4>
                                    <button id="preview-btn" onClick={() => this.handlePreview(3)}>Preview</button>
                                    <a id="code-btn" href="https://github.com/jmNepomuceno/re-inventory-mw">Code</a>
                                </div>
                            </div>
                        </div>

                        <div className='card'>
                            <div id='info-div'>
                                <p>
                                    <span>A </span> practice project for node.js and fetching data using 
                                    the list of every student in Iskolar ng Bataan.

                                </p>
                                <div id='tools'>
                                    <h3>HTML</h3>
                                    <h3>CSS</h3>
                                    <h3>EJS</h3>
                                    <h3>Node.js</h3>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='content'>
                                    <h2 id="num-id">04</h2>
                                    <h3 id="type-h3">Solo Project</h3>
                                    <h4 id="proj-h4">Iskolar ng Bataan User ID</h4>
                                    <button id="preview-btn" onClick={() => this.handlePreview(4)}>Preview</button>
                                    <a id="code-btn" href="https://github.com/jmNepomuceno/iskolarUserID">Code</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <aside>
                    <img id="pc-img" src={require('../imgs/monitor.png')} alt="pc-img" />
                    <img id="phone-img" src={require('../imgs/phone.png')} alt="phone-img" />

                    <div id="pc-div">
                        <img style={{display : this.state.display_PC.pc_A_1.display}} id="food-img" src={require("../imgs/" + this.state.imgUrl_PC[1].pc_A)} alt="food-img" />
                        <img style={{display : this.state.display_PC.pc_A_2.display}} id="food-img" src={require("../imgs/" + this.state.imgUrl_PC[2].pc_A)} alt="food-img" />
                        <img style={{display : this.state.display_PC.pc_A_3.display}} id="food-img" src={require("../imgs/" + this.state.imgUrl_PC[3].pc_A)} alt="food-img" />
                        <img style={{display : this.state.display_PC.pc_A_4.display}} id="food-img" src={require("../imgs/" + this.state.imgUrl_PC[4].pc_A)} alt="food-img" />
                    </div>

                    <div id="phone-div">
                        <img style={{display : this.state.display_PC.mo_A_1.display}} id="food-img" src={require("../imgs/" + this.state.imgUrl_MO[1].mo_A)} alt="food-img" />
                        <img style={{display : this.state.display_PC.mo_A_2.display}} id="food-img" src={require("../imgs/" + this.state.imgUrl_MO[2].mo_A)} alt="food-img" />
                        <img style={{display : this.state.display_PC.mo_A_3.display}} id="food-img" src={require("../imgs/" + this.state.imgUrl_MO[3].mo_A)} alt="food-img" />
                    </div>

                </aside>
            </div>
        );
    }
}
 
export default Project;