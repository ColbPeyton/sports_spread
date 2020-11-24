import React from 'react';

import '../styles/Line.scss';

function Line(props){
    return(
        <div className='line'>
            <div className='line-container'>
                <div className='teams'>
                    <p>{props.lineData.team1}</p>
                    <p>{props.lineData.team2}</p>
                </div>
                <div className='spread-container'>
                    <div className='names'>
                    <h3>Mgm</h3>
                    <h3>Bovada</h3>
                    <h3>Westgate</h3>
                    <h3>W.H.</h3>

                    </div>
                    <div className='data'>
                    <div className={`spread ${props.lineData.choice === 'mgm' ? 'selected' : ''}`}>
                        <p>{props.lineData.mgm[0]}</p>
                        <p>{props.lineData.mgm[1]}</p>
                    </div>
                    <div className={`spread ${props.lineData.choice === 'bovada' ? 'selected' : ''}`}>
                        <p>{props.lineData.bovada[0]}</p>
                        <p>{props.lineData.bovada[1]}</p>
                    </div>
                    <div className={`spread ${props.lineData.choice === 'westgate' ? 'selected' : ''}`}>
                        <p>{props.lineData.westgate[0]}</p>
                        <p>{props.lineData.westgate[1]}</p>
                    </div>
                    <div className={`spread ${props.lineData.choice === 'williamHill' ? 'selected' : ''}`}>
                        <p>{props.lineData.williamHill[0]}</p>
                        <p>{props.lineData.williamHill[1]}</p>
                    </div>
                    </div>
   
                </div>

            </div>
        </div>
    )
}

export default Line;