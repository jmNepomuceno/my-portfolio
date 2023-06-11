import React from 'react';

function Home() {
    const scrollToAbout = () => {
        const section = document.querySelector( '#about-id' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };
    return (
        <div className='home-div' id="home-id">
            <div id='body-div'> 
                <div id="pic-div">

                </div>

                <h2>Hi, I'm <span>JM Nepomuceno</span></h2>
                <div id='container'>
                    <div id='static-txt'>Web</div>
                    <ul id='dynamic-txts'>
                        <li><span>Developer</span></li>
                        <li><span>Designer</span></li>
                    </ul>
                </div>
                <button onClick={scrollToAbout}>See more!</button>
            </div>
        </div>
    );
}

export default Home;