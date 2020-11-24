import React from 'react';

import Line from '../Line';

import data from '../../_data/gameData';


import '../../styles/ChoicePage.scss';

function ChoicePage(){

    function renderLines(){
        return data.map((d, index) => {
            return <Line lineData={d} key={index} />
        })
    }

    return(
        <div className='choice-page'>
            <div className='title-container'>
                <h3>record</h3>
            </div>
            <div className='choice-container'>
                {renderLines()}
            </div>

            <div className='record-container'>
                <h3>record</h3>
            </div>
        </div>
    );
}


export default ChoicePage;