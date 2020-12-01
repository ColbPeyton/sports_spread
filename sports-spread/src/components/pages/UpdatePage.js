import Axios from 'axios';
import React from 'react';
import axios from 'axios';

import '../../styles/UpdatePage.scss';

function UpdatePage(){
    function updatePage(){
        axios.get('https://drhoops.net/api/line')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <div className='update-page'>
            <div className='container'>
            <button onClick={updatePage}>UpdatePage</button>
            </div>
        </div>
    )
}


export default UpdatePage;