import React from 'react';

function LoginComponent(){
    return(
        <form method='post' action='/login'>
            <input type='text' id='username' name='username' placeholder='Username'>
            </input>
            <input type='password' id='password' name='password' placeholder='password'>
            </input>
            <input type='submit' value='Login'/>
        </form>
    )
}

export default LoginComponent;
