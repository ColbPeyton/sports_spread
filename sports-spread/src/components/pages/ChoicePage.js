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
            <div className='choice-page-container'>
                <div className='title-container'>
                    <h3>Today's Picks</h3>
                </div>
                <div className='choice-container'>
                    {renderLines()}
                </div>

                {/* <div className='record-container'>
                    <h3>record</h3>
                </div> */}
            </div>
            
        </div>
    );
}


export default ChoicePage;