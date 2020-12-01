import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../styles/SignInPage.scss';

function SignInPage(){

    const [user, setuser] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        axios.post('https://drhoops.net/', {user: user, password: password})
        .then(() =>{
            alert('success')
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