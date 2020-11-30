import React from 'react';
import {NavLink} from "react-router-dom";

import '../../styles/HomePage.scss';

import badge from '../../assets/icons/hoops_badge.png'
function HomePage(){
    function underConstruction(){
        return(
            <NavLink exact className='link construction' disabled to='/'>
                <p>Under Construction: Check Back Later!</p>
            </NavLink>
        )
    }

    function originalPath(){
        return(
            <NavLink exact className='link' to='/picks'>
                <p>See Today's Picks</p>
            </NavLink>
        )
    }
    return(
        <div className='home-page'>
            <div className='home-container'>
                <div className='badge'>
                    <img src={badge} alt='Dr.Hoops Badge' />
                </div>
                <div className='btn-container'>
                    {underConstruction()}
                </div>
            </div>
        </div>
    );
}


export default HomePage;