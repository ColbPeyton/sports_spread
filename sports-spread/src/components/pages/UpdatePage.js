import React,{useState, useEffect} from 'react';
import axios from 'axios';
import FormData from '../FormData';
import auth from '../../auth';

import '../../styles/UpdatePage.scss';


import UpdateMessage from '../UpdateMessage';

function UpdatePage(props){

    const [currentData, setCurrentData] = useState([]);
    const [output, setOutput] = useState([])


    const [messageActive, setMessageActive] = useState(false);
    const [currMessage, setCurrMessage] = useState('');

    useEffect(()=>{
        // console.log(currentData)
    })

    function updateData(){
        axios.post('https://drhoops.net/api/line', {data: true})
        .then((res) => {
            handleMessage('Database Updated!');

        })
        .catch(err => {
            console.log(err)
        })
    }

    async function getData(){
        axios.get('https://drhoops.net/api/line/data')
        .then(async (res) => {
            handleMessage('Pulled Lines From Database!');
            return await res.data[0].line;
        })
        .then(res => {
            setCurrentData(JSON.parse(res));

        })
        .catch(err => {
            console.log(err)
        })
    }
    
    async function sendData(){
        const str = JSON.stringify(output);

        await axios.post('https://drhoops.net/api/line/upload', 
        {data: str}
        )
        .then((res) =>{
            console.log(res)
            handleMessage('Data Sent!');

        })
        .catch((err)=>{
            
            console.log(err)
        })

        auth.logout(()=>{
            props.history.push('/picks');
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

    function handleMessage(message){
        setCurrMessage(message);
        setMessageActive(true);

        setTimeout(() => {
            setMessageActive(false);
        }, 5000);
    }

    function renderMessage(){
        if(messageActive){
            return(
                <UpdateMessage message={currMessage} active={messageActive}/> 
            )
        }
        return ''
        
    }





    return(
        <div className='update-page'>
            {renderMessage()}
            <div className='container'>
            <div className='update-container'>
                <button onClick={updateData}>Update Database</button>
                <button onClick={getData}>Get Data</button>
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