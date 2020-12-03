import React, { useState } from 'react';
import axios from 'axios';
import auth from '../../auth';


import '../../styles/SignInPage.scss';

function SignInPage(props){

    const [user, setuser] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        axios.post('https://drhoops.net/api/login', 
        {data: {user: user, password: password}}
        )
        .then((res) =>{
            if(res.data.code === 200){
                auth.login(()=>{
                    props.history.push("/update");
                })
            }
        })
        .catch((err)=>{
            
            console.log(err)
        })
    }

    return(
        <div className='sign-in'>
            <div className='container'>
                <div className='form'>
                    <div className='item-container'>
                        <div className='item'>
                            <label>Username:</label>
                            <input type='text' name='user' onChange={(e)=> setuser(e.target.value)} />
                        </div>
                    </div>
                    <div className='item-container'>
                    <div className='item'>
                        <label>Password:</label>
                        <input type='password' name='password' onChange={(e)=> setPassword(e.target.value)} />
                    </div>
                    </div>
                    <button onClick={submit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;