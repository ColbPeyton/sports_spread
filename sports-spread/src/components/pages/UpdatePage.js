import React,{useState, useEffect} from 'react';
import axios from 'axios';
import FormData from '../FormData';

import '../../styles/UpdatePage.scss';


function UpdatePage(){

    const [currentData, setCurrentData] = useState([]);
    const [output, setOutput] = useState([])

    useEffect(()=>{
        // console.log(currentData)
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
                return <FormData formData={d} key={index} index={index} sendBack={addToOutput}/>
            }
        })
    }

    function addToOutput(childData){
        const check = output.findIndex(data => data.team1 === childData.team1);
        if(check !== -1){
            const temp = output;
            temp[check] = childData;
            setOutput(temp);
        }else{
            setOutput([...output, childData]);
        }
    }


    function sendData(){
        const str = JSON.stringify(output);
        console.log(str);
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
            <div className='update-container'>
                <button onClick={sendData}>Send Data</button>
            </div>
            </div>
        </div>
    )
}


export default UpdatePage;