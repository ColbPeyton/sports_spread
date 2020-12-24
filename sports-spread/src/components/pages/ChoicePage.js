import React,{useState, useEffect} from 'react';
import Loading from '../../components/Loading';
import axios from 'axios';
import Line from '../Line';

import '../../styles/ChoicePage.scss';

function ChoicePage(){

    const [data, setData] = useState([])
    const [lines, setLines] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        if(data.length > 1){
            setLines(renderLines())
        }
    }, [data])

    async function getData(){
        await axios.get('https://drhoops.net/api/line/final')
        .then(async (res) => {
            return await res.data[0].data;
        })
        .then(res => {
            setIsLoading(false);
           setData( JSON.parse(res));
        })
        .catch(err => {
            console.log(err)
        })
    }

    function renderLines(){
        return data.map((d, index) => {
            return <Line lineData={d} key={index} />
        })
    }

    return(
        <div className='choice-page'>
            <div className='choice-page-container'>
                <div className='title-container'>
                    <h3>Today's Picks</h3>
                </div>
                <div className='choice-container'>
                    {lines}
                </div>
            </div>
            
        </div>
    );
}


export default ChoicePage;