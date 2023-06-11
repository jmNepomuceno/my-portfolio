import React from 'react';

function Contact() {
    return (
        <div className='contact-div' id="contact-id">
            <footer>
                <h2 id="title-h2">Get in Touch</h2>
                <hr/>

                <div id="medias-div">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/johnmarvin.nepomuceno.3/"><button><i className="fa fa-facebook-f"></i></button></a>
                        </li>

                        <li>
                            <a href="https://www.facebook.com/johnmarvin.nepomuceno.3/"><button><i className="fa fa-github"></i></button></a>
                        </li>

                        <li>
                            <a href="https://github.com/"><button><i className="fa fa-instagram"></i></button></a>
                        </li>

                        <li>
                            <a href="mailto: johnmarvinnepomuceno@gmail.com"><button><i class="fa fa-envelope"></i></button></a>
                        </li>
                    </ul>
                </div>

            </footer>
        </div>
    );
}

export default Contact;