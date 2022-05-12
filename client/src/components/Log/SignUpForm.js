import React, { useState } from 'react';
import axios from 'axios';
import SignInForm from './SignInForm';

const SignUpForm = () => {
    const [formSubmit, setFormSubmit] =  useState(false);
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [controlePassword, setControlPassword] = useState('');

    const handleRegister = async (e) => {
            e.preventDefault();
            const terms = document.getElementById('terms');
            const pseudoError = document.querySelector('.pseudo.error');
            const emailError = document.querySelector('.email.error');
            const passwordError = document.querySelector('.password.error');
            const passwordConfirmError = document.querySelector('.password-confirm.error');
            const termsError = document.querySelector('.terms.error');

            passwordConfirmError.innerHTML = "";
            termsError.innerHTML = '';

            if(password !== controlePassword || !terms.checked){
                if(password !== controlePassword)
                passwordConfirmError.innerHTML = "Les mots de passe ne matchent pas";

                if(!terms.checked)
                termsError.innerHTML = 'Veuillez valider les CGV';
            }else{
                await axios({
                    method: "post",
                    url:`${process.env.REACT_APP_API_URL}api/user/register`,
                    data:{
                        pseudo,
                        email,
                        password
                    }
                }).then((res) => {
                    console.log(res);
                    if(res.data.errors){
                        pseudoError.innerHTML = res.data.errors.pseudo;
                        emailError.innerHTML = res.data.errors.email;
                        passwordError.innerHTML = res.data.errors.password;
                        
                    }else{
                        setFormSubmit(true)
                    }
                }).catch((err) => console.log(err))
            }
    }

    return (
        <>

            {formSubmit ? (
                <>
                <SignInForm />
                <h4 className='success'>Enregistrment réussi</h4>
                </>
            )
            :
            (

          
            <form action="" onSubmit={handleRegister} id="sign-up-form">
                <label htmlFor="pseudo">Pseudo</label>
                <br/>
                <input type="text" name="pseudo" id="pseudo" onChange={(e)=> setPseudo(e.target.value)} value={pseudo} />
                <br/>
                <div className="pseudo error"></div>
                <br/>

                <label htmlFor="email">Email</label>
                <br/>
                <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
                <br/>
                <div className="email error"></div>
                <br/>

                <label htmlFor="password">Mot de passe</label>
                <br/>
                <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)} value={password} />
                <br/>
                <div className="password error"></div>
                <br/>

                <label htmlFor="password-conf">Confirmer mot de passe</label>
                <br/>
                <input type="password" name="password" id="password-conf" onChange={(e)=> setControlPassword(e.target.value)} value={controlePassword} />
                <br/>
                <div className="password-confirm error"></div>
                <br/>

                <input type="checkbox" id='terms' />
                <label htmlFor="terms">I do accept <a href="http://google.fr" target="_blank">CGV</a></label>
                <br/>
                <div className="terms error"></div>
                <br/>

                <input type="submit" value="Valider inscription" />
            </form>  
              )
            }          
        </>
    );
};

export default SignUpForm;