import React from 'react';

function LoginComponent(sessionData){
    console.log(sessionData)
    return(
        <form method='post' action='/login' className={`${sessionData.sessionData.authenticated === true ? 'hidden':'shown'}`}>
            <input type='text' id='username' name='username' placeholder='Username'>
            </input>
            <input type='password' id='password' name='password' placeholder='password'>
            </input>
            <input type='submit' value='Login'/>
        </form>
    )
}

export default LoginComponent;
