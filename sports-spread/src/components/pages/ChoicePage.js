import React from 'react';

import Line from '../Line';

import data from '../../_data/gameData';

function ChoicePage(){

    function renderLines(){
        return data.map((d, index) => {
            return <Line lineData={d} key={index} />
        })
    }

    return(
        <div className='choice-page'>
            <div className='choice-container'>
                {renderLines()}
            </div>
        </div>
    );
}


export default ChoicePage;