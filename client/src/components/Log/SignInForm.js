import React, { useState } from 'react';
import axios from 'axios';

const SignInForm = () => {
    const [email , setEmail] = useState('');
    const [password,setPassword] = useState('');
    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');

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
            console.log(res);
            if(res.data.errors){
                emailError.innerHTML = res.data.errors.email;
                passwordError.innerHTML = res.data.errors.password;
            } else{
                window.location = '/';
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <form action="" onSubmit={handlelogin} id="sign-up-form">
                <label htmlFor="email">Email</label>
                <br/>
                <input type="text" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                <div className="email error"></div>
                <br/>
                <label htmlFor="pasword">Mot de passe</label>
                <br/>
                <input type="password" name="password" id="pasword" onChange={(e)=> setPassword(e.target.value)} value={password} />
               <div className="password error"></div>
                <br/>
                <input type="submit" value="Se connecter"/> 
            </form>
        </>
    );
};

export default SignInForm;