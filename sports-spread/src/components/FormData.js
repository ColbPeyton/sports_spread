import React,{useState} from 'react';

import '../styles/FormData.scss';

function FormData(props){

    const [currentSite, setSite] = useState(props.formData.sites[0].name);
    const [odds, setOdds] = useState(props.formData.sites[0].points[0]);
    const [clicked, setClicked] = useState(false);
    function renderTeam(){
        return(
            <div className='teams'>
                <p>{props.formData.team1}</p>
                <div className='sep'></div>
                <p>{props.formData.team2}</p>
            </div>

        )
    }

    function renderSites(){
        return props.formData.sites.map((site, index) => {
            return <option key={index} value={site.name}>{site.name}</option>
        })
    }

    function renderOdds(){
        // eslint-disable-next-line
        return props.formData.sites.map((site, index) => {
            if(site.name === currentSite){
                return site.points.map((s, i) => {
                    return <option key={i} value={s}>{s}</option>

                })
            }
        })
    }

    function sendData(){
        setClicked(true);
        props.sendBack(
            {
                team1: props.formData.team1,
                team2: props.formData.team2,
                sites: props.formData.sites,
                choice: {
                    name: currentSite,
                    point: odds
                }
            }
        )
    }

    // fixes issue with odds not correctly updating on site change
    function updateSiteAndOdds(e){
        setSite(e.target.value)
        for(const site of props.formData.sites){
            if(e.target.value === site.name){
                setOdds(site.points[0]);
            }
        }
    }

    return(
        <div className={`form-data ${clicked ? 'clicked' : ''}`}>
            <div className='form-container'>
                {renderTeam()}
                <div className='drop-down'>
                    <select value={currentSite} onChange={(e)=>updateSiteAndOdds(e)}>
                        {renderSites()}
                    </select>
                </div>
                <div className='drop-down'>
                    <select value={odds} onChange={(e)=>setOdds(e.target.value)}>
                        {renderOdds()}
                    </select>
                </div>
                <div className='btn'>
                    <button onClick={() => sendData()}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default FormData;