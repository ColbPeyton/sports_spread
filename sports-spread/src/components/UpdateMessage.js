import React from 'react';


import '../styles/UpdateMessage.scss';

function UpdateMessage(props){
    return(
        <div className='update-message'>
            <div className='container'>
                <p>{props.message}</p>
            </div>
        </div>
    )
}