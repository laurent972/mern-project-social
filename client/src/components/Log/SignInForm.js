import React, { useState } from 'react';
import axios from 'axios';

const SignInForm = () => {
    const [email , setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handlelogin = (e)=>{
        e.preventDefault();

        axios({
            method: "post",
            url:`${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials: true,
            data: {
                email,
                password,
            },
        })
        .then((res) => {
            
        })
    }

    return (
        <>
            <form action="" onSubmit={handlelogin} id="sign-up-form">
                <label htmlfor="email">Email</label>
                <br/>
                <input type="text" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                <div class="email error"></div>
                <br/>
                <label htmlfor="pasword">Mot de passe</label>
                <br/>
                <input type="password" name="password" id="pasword" onChange={(e)=> setPassword(e.target.value)} value={password} />
               <div class="password error"></div>
                <br/>
                <input type="submit" value="Se connecter"/> 
            </form>
        </>
    );
};

export default SignInForm;