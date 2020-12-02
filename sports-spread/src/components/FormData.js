import React,{useState} from 'react';

import '../styles/FormData.scss';

function FormData(props){

    const [site, setSite] = useState('Choose');
    const [odds, setOdds] = useState('');

    function renderTeam(){
        return(
            <div className='teams'>
                <h3>{props.formData.team1}</h3>
                <h3>{props.formData.team2}</h3>
            </div>

        )
    }

    function renderSpreadSites(){
        return props.formData.sites.map((site, index) => {
            return <option key={index} value={site.name}>{site.name}</option>
        })
    }
    return(
        <div className='form-data'>
            <div className='form-container'>
                {renderTeam()}
                <select value={''} onChange={(e)=>setSite(e.target.value)}>
                    {renderSpreadSites()}
                </select>
            </div>
        </div>
    )
}

export default FormData;