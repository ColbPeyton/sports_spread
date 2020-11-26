import React from 'react';
import {NavLink} from "react-router-dom";

import '../../styles/HomePage.scss';

import badge from '../../assets/icons/hoops_badge.png'
function HomePage(){
    return(
        <div className='home-page'>
            <div className='home-container'>
                <div className='badge'>
                    <img src={badge} alt='Dr.Hoops Badge' />
                </div>
                <div className='btn-container'>
                    <NavLink exact className='link' to='/picks'>
                        <p>See Today's Picks</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}


export default HomePage;