import React from 'react';

import '../styles/Line.scss';

function Line(props){

    function renderSpreadNames(){
        return props.lineData.sites.map((site, index) => {
            return <h3 className={checkIfPick(site.name, 'name')} key={index}>{site.name}</h3>
        })
    }
    function renderSpreadData(){
        return props.lineData.sites.map((data, index) => {
            return (
                <div className={`spread`} key={index}>
                        <p className={checkIfPick(data.points[0], 'point')}>{addPlus(data.points[0])}</p>
                        <p className={checkIfPick(data.points[1], 'point')}>{addPlus(data.points[1])}</p>
                </div>
            );
       })
    }

    function addPlus(num){
        return num > 0 
        ? `+${num}`
        : num;
    }

    function checkIfPick(el, key){
        return el === props.lineData.choice[key] 
        ? 'selected'
        : '';
    }
    return(
        <div className='line'>
            <div className='line-container'>
                <div className='teams'>
                    <p>{props.lineData.team1}</p>
                    <p>{props.lineData.team2}</p>
                </div>
                <div className='spread-container'>
                    <div className='names'>
                            {renderSpreadNames()}
                    </div>
                    <div className='data'>
                        {renderSpreadData()}
                    </div>
   
                </div>

            </div>
        </div>
    )
}

export default Line;