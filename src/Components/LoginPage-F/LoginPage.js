import React, {useState} from 'react';
import './LoginPage.css';
import {Link, useHistory} from "react-router-dom";
import {auth} from '../../firebase'

function LoginPage() {
    const history = useHistory();//Allows use to programatically change the url
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [UserName, setUserName]= useState("");

    const Signin= e =>{
        e.preventDefault()//prevents page refresh
        //Fancy Firebase stuff

        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=> alert(error.message))
    }
    const Register= e =>{
        e.preventDefault()
        //CREATE's a new  User account with firebas authentication
        //Fancy Firebase stuff

auth.createUserWithEmailAndPassword(email,password)
.then((auth)=>{
    if (auth){
        //inside this history(the web browser history , push this page "/" which is {homepage} basically forcing a REDIRECT  )
        history.push('/')
    }
})
.catch(error=> alert(error.message))


    }

    return (
        <div className="login_pg">
            <Link to="/">
            <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>

            <div className="login_cntnr">
                <strong>Sign-In</strong>
                <form>
                    {/* <h5>User Name</h5>
                    <input value={UserName} type="text" onChange={e=> setUserName(e.target.value)}/> */}
                    <h5>E-mail</h5>
                    <input value={email} type="text" onChange={e=> setEmail(e.target.value)} />

                    <h5>Password</h5>
                    {/* the type="password" allows input to be hiddin {***} */}
                    <input value={password} type="password" onChange={e=> setPassword(e.target.value)} /> 

                    <button type='submit' onClick={Signin} className="login_Sign-in-btn">Sign In</button>
                </form>
                <p>
                    hbfb djfkndf kdb bhfdfbkbdf jfdkjf jnfskd jjfkds fbjkdsf bfdf 
                    by signing in your are enablinng authorization over user action
                </p>
                <button onClick={Register} className="login_Create_account-btn">Create an Amazon Account</button>
            </div>
        </div>
    )
}

export default LoginPage
