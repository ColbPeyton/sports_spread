import React,{useState, useEffect} from 'react';

import '../styles/FormData.scss';

function FormData(props){

    const [currentSite, setSite] = useState(props.formData.sites[0].name);
    const [odds, setOdds] = useState('odds');

    function renderTeam(){
        return(
            <div className='teams'>
                <h3>{props.formData.team1}</h3>
                <h3>{props.formData.team2}</h3>
            </div>

        )
    }

    function renderSites(){
        return props.formData.sites.map((site, index) => {
            return <option key={index} value={site.name}>{site.name}</option>
        })
    }

    function renderOdds(){
        return props.formData.sites.map((site, index) => {
            if(site.name == currentSite){
                return site.points.map((s, i) => {
                    return <option key={i} value={s}>{s}</option>

                })
            }
        })
    }

    return(
        <div className='form-data'>
            <div className='form-container'>
                {renderTeam()}
                <div className='drop-down'>
                    <select value={currentSite} onChange={(e)=>setSite(e.target.value)}>
                        {renderSites()}
                    </select>
                </div>
                <div className='drop-down'>
                    <select value={odds} onChange={(e)=>setOdds(e.target.value)}>
                        {renderOdds()}
                    </select>
                </div>
                <div className='btn'>
                    {/* <button onClick={() => sendData()} */}
                </div>
            </div>
        </div>
    )
}

export default FormData;