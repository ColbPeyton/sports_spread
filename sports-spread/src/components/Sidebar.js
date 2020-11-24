import React, {useState, useEffect} from 'react';

import '../styles/Sidebar.scss';


function Sidebar(props){

    const [active, setActive] = useState(true);


    useEffect(()=>{
       setActive(props.sidebar)
    }, [props.sidebar]);


    // call parent function to disable sidebar when link is clicked
    function disable(){
        setActive(false);
        props.disableSidebar();
    }

    function chooseAnimation(){
        return props.width >= 1200
        ? {animation: `${active ? "slideInSideLarge" : "slideOutSideLarge"} 0.5s forwards`}
        : {animation: `${active ? "slideInSide" : "slideOutSide"} 0.5s forwards`}
    }

    return(
        <div className={`sidebar ${active ? 'active' : 'not-active'}`} style={ chooseAnimation() }>
            <div className='sidebar-container' style={{top: 0}}>
                <div className='sidebar-container-links'>
                    <nav>
                        <ul>
                            {props.routes.map((route, index) => <li onClick={()=> disable()} key={index}>{route}</li> )}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;