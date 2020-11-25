import React from 'react';

import '../styles/Footer.scss';

const dev = 'https://www.colbypeyton.com/';


function Footer(props){

    return(
        <div className='footer'>
            <div className='footer-container'>
                <ul>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
                <div className='dev'>
                    <p>Developed by <a href={dev} target="_blank" rel="noreferrer">ColbPeyton</a></p>
                </div>
            </div>

        </div>
   
    );
};

export default Footer;