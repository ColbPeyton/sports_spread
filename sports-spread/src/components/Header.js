import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Sidebar from './Sidebar';

import '../styles/Header.scss';


function Header(props){

    const [activeSide, setActiveSide] = useState(false);
    const [sidebar, setSidebar] = useState(false);


    function renderSidebar(){
        return activeSide 
        ? <Sidebar routes={props.routes} sidebar={sidebar} disableSidebar={enableOrDisableSidebar} width={props.width}/>
        : '';
    }

    
    function enableOrDisableSidebar(){
        if(activeSide){
            setSidebar(false);
            setTimeout(() => {
                setActiveSide(false)
            }, 500);
        }else{
            setSidebar(true)
            setActiveSide(true)
        }

    }

    return(
        <div>
            <header className='header-container'>
                <button className={`header-dropdown-container ${activeSide ? 'active' : ''}`} onClick={()=> enableOrDisableSidebar()}>
                    <div className='dropdown'></div>
                    <div className='dropdown'></div>
                    <div className='dropdown'></div>
                </button>
                <div className='header-logo'>
                    {/* <NavLink exact className='link' to='/'>
                        <img src={logo} alt='Home icon'/>
                    </NavLink>  */}
                </div>
            </header>
        {renderSidebar()}
        </div>
    );
};

export default Header;