import React,{useState, useEffect} from 'react';
import axios from 'axios';
import FormData from '../FormData';

import '../../styles/UpdatePage.scss';


function UpdatePage(){

    const [currentData, setCurrentData] = useState([]);

    useEffect(()=>{
        console.log(currentData)
    })

    async function updateData(){
        axios.get('https://drhoops.net/api/line/data')
        .then(async (res) => {
            return await res.data[0].line;
        })
        .then(res => {
            setCurrentData(JSON.parse(res));
        })
        .catch(err => {
            console.log(err)
        })
    }

    function renderForm(){
        return currentData.map((d, index) => {
            if(d.sites.length > 0){
                return <FormData formData={d} key={index} index={index}/>
            }
        })
    }

    return(
        <div className='update-page'>
            <div className='container'>
            <div className='update-container'>
                <button onClick={updateData}>Update Data</button>
            </div>
            
            <div className='form'>
                {renderForm()}
            </div>
  
            {/* {console.log(currentData)} */}
            </div>
        </div>
    )
}


export default UpdatePage;