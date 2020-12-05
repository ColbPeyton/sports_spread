import React, {useState, useEffect} from 'react';


import '../styles/UpdateMessage.scss';

function UpdateMessage(props){

    const [active, setActive] = useState(true);

    
    useEffect(()=>{
        setActive(props.active)
     }, [props.active]);

     useEffect(()=>{
         setTimeout(()=>{
             setActive(false);
         }, 3000);
     })


    return(
        <div className={`update-message ${active ? 'active' : 'not-active'}`} style={ {animation: `${active ? "slideInTop" : "slideOutTop"} 0.5s forwards`}}>
            <div className='message-container' style={{top: 0}}>
                <p>{props.message}</p>
            </div>
        </div>
    )
}


export default UpdateMessage;