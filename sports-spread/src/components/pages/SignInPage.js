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
                    <label>Username:</label>
                    <input type='text' name='user' onChange={(e)=> setuser(e.target.value)} />
                    <label>Password:</label>
                    <input type='password' name='password' onChange={(e)=> setPassword(e.target.value)} />

                    <button onClick={submit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;