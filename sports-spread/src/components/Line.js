import React from 'react';

import '../styles/Line.scss';

function Line(props){

    function selectedChoice(name){
        return name === props.lineData.choice
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
                    <h3 className={selectedChoice('mgm')}>Mgm</h3>
                    <h3 className={selectedChoice('bovada')}>Bovada</h3>
                    <h3 className={selectedChoice('westgate')}>Westgate</h3>
                    <h3 className={selectedChoice('williamHill')}>W.H.</h3>

                    </div>
                    <div className='data'>
                    <div className={`spread ${selectedChoice('mgm')}`}>
                        <p>{props.lineData.mgm[0]}</p>
                        <p>{props.lineData.mgm[1]}</p>
                    </div>
                    <div className={`spread ${selectedChoice('bovada')}`}>
                        <p>{props.lineData.bovada[0]}</p>
                        <p>{props.lineData.bovada[1]}</p>
                    </div>
                    <div className={`spread ${selectedChoice('westgate')}`}>
                        <p>{props.lineData.westgate[0]}</p>
                        <p>{props.lineData.westgate[1]}</p>
                    </div>
                    <div className={`spread ${selectedChoice('williamHill')}`}>
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