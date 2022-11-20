import React, { useState } from 'react';
import './Authuser.css'
import logo from '../../Assets/images/stackoverflow.png';
import githublogo from "../../Assets/images/githublogo.png";
import fblogo from "../../Assets/images/facebooklogo Cropped.png";
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, facebookprovider, githubprovider, provider } from '../../Firebase-auth';



const AuthUser = () => {

    // To toggle between signup and login screen;
    const [register, setRegister] = useState(false);

    // For resetting password
    const [resetlink, setResetLink] = useState(false);


    // various states for authorization of credentials
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");



    // Google signin
    const handleSignInWithGoogle = () => {
        // error.preventDefault();
        setLoading(true);
        signInWithPopup(auth, provider).then((res) => {
            console.log(res)
            setLoading(false);
            navigate("/");
        })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }

    // Github provider
    const handleSignInWithGithub = () => {
        // error.preventDefault();
        setLoading(true);
        signInWithPopup(auth, githubprovider).then((res) => {
            console.log(res)
            setLoading(false);
            navigate("/");
        })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }

    // Facebook Provider
    const handleSignInWithFacebook = () => {
        setLoading(true);
        signInWithPopup(auth, facebookprovider).then((res) => {
            console.log(res)
            setLoading(false);
            navigate("/");
        })
            .catch((error) => {
                setLoading(false);
                console.log(error)
            });
    }

    // for form validation of Email 
    const validateEmail = (email) => {
        const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email) === false) {
            return false;
        } else return true;
    }

    // Function for handling Sign In
    const handleSignIn = (e) => {
        e.preventDefault();
        setError("");
        setLoading(true)
        if (email === "" || password === "") {
            setError("Required field is missing");
            setLoading(false);
        }
        else if (!validateEmail(email)) {
            setError("Error");
            setLoading(false);
        }
        else {
            signInWithEmailAndPassword(auth, email, password).then((res) => {
                console.log(res)
                navigate("/")
                setLoading(false)
            }).catch((error) => {
                console.log(error.message)
                setError(error.message);
                setLoading(false)
            });
        }
    }

    // Function for handling register
    const handleRegister = (e) => {
        e.preventDefault();
        setError("");
        setLoading(false)
        if (email === "" || password === "" || username === "") {
            setError('Required email and password');
            setLoading(false)
        }
        else if (!validateEmail(email)) {
            setError("Email is malformed");
            setLoading(false);
        }
        else {
            createUserWithEmailAndPassword(auth, email, password).then((res) => {
                navigate("/")
                setLoading(false)
                console.log(res)
            }).catch((error) => {
                console.log(error)
                setError(error.message)
                setLoading(false)
            });
        }
    };

    // Reset password through email
    const handleForgotPassword = () => {
        // e.preventDefault();
        setError("")
        setLoading(false)
        if (email === "") {
            setError('Please provide email');
            setLoading(false)
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then((res) => {
                    setLoading(false);
                    console.log(res);
                    setResetLink(true);
                })
                .catch((error) => {
                    setError(error.message)
                    console.log(error);
                    setLoading(false);
                });
        }
    }


    return (
        <div className='Auth container-fluid'>
            <div className='Auth col'>
                {/* Stackoverflow logo */}
                <img className='stack-logo' alt="logo" src={logo} />
                <div className='Login-cards-container'>
                    <div className="Login-card">
                        <div onClick={handleSignInWithGoogle} className="Login-card-body">
                            {/* Log in with google card */}
                            <img alt='logo' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                            <span className='login-dtls'>Log in with Google</span>
                        </div>
                    </div>
                    {/* Log in with Github card */}
                    <div onClick={handleSignInWithGithub} className="Login-card1">
                        <div className="Login-card-body">
                            <img alt='logo' src={githublogo} />
                            <span className='login-dtls1'>Log in with Github</span>
                        </div>
                    </div>
                    {/* Log in with Facebook card */}
                    <div className="Login-card2" onClick={handleSignInWithFacebook}>
                        <div className="Login-card-body">
                            <img alt='logo' src={fblogo} />
                            <span className='login-dtls2'>Log in with Facebook</span>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>

                            {/* Toogle between login and register screens */}
                            {
                                register ? (
                                    <form>
                                        {/* Register card */}
                                        <div className="mb-3">
                                            <label className="form-label">Username</label>
                                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                                        </div>
                                        <button onClick={handleRegister} className="button2"> {loading ? "Registering..." : "Register"}</button>
                                    </form>
                                )
                                    : (
                                        <form>
                                            {/* Login card */}
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                                            </div>
                                            <button onClick={handleSignIn} className="button2"> {loading ? "Logging in" : "Log in"}</button>
                                            <Link onClick={handleForgotPassword} className='Mainlink'><p className='ForgotPassword'>{resetlink ? "Email sent. Please check spam folder" : "Forgot Password"}</p></Link>
                                        </form>
                                    )
                            }
                        </div>
                        {/* Toogle between login and register pages */}
                        <h6 className='NewUserReg'><Link className='Mainlink' onClick={() => setRegister(!register)}> {register ? "Login" : "New User? Register Here"}</Link></h6>
                        {error !== "" && (
                            <p className="errmessage" style={{ color: "red", fontSize: "14px", }}>{error}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthUser;
