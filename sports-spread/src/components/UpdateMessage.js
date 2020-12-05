import React, {useState, useEffect} from 'react';


import '../styles/UpdateMessage.scss';

function UpdateMessage(props){

    const [active, setActive] = useState(true);

    
    useEffect(()=>{
        setActive(props.sidebar)
     }, [props.sidebar]);

     useEffect(()=>{
         setTimeout(()=>{
             setActive(false);
         }, 1000);
     })



     let animation = {animation: `${active ? "slideInTop" : "slideOutTop"} 0.5s forwards`};

    return(
        <div className={`update-message ${active ? 'active' : 'not-active'}`} style={ animation}>
            <div className='container'>
                <p>{props.message}</p>
            </div>
        </div>
    )
}


export default UpdateMessage;