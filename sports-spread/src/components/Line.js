import react from 'react';

function Line(props){
    return(
        <div className='line'>
            <div className='line-container'>
                <div className='teams'>
                    <p>{props.lineData.team1}</p>
                    <p>{props.lineData.team2}</p>
                </div>
                <div className={`spread ${props.choice === 'mgm' ? 'selected' : ''}`}>
                    <h3>Mgm</h3>
                    <p>{props.lineData.mgm}</p>
                </div>
                <div className={`spread ${props.choice === 'bovada' ? 'selected' : ''}`}>
                    <h3>Bovada</h3>
                    <p>{props.lineData.bovada}</p>
                </div>
                <div className={`spread ${props.choice === 'westgate' ? 'selected' : ''}`}>
                    <h3>Westgate</h3>
                    <p>{props.lineData.westgate}</p>
                </div>
                <div className={`spread ${props.choice === 'williamHill' ? 'selected' : ''}`}>
                    <h3>William Hill</h3>
                    <p>{props.lineData.williamHill}</p>
                </div>
            </div>
        </div>
    )
}