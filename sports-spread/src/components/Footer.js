import React from 'react';

import '../styles/Footer.scss';

const dev = 'https://www.colbypeyton.com/';


function Footer(props){

    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='social'>
                   <a href='https://twitter.com/0cp1?lang=en'  target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                </div>
                <div className='dev'>
                    <p>Developed by <a href={dev} target="_blank" rel="noreferrer">ColbPeyton</a></p>
                </div>
            </div>

        </div>
   
    );
};

export default Footer;