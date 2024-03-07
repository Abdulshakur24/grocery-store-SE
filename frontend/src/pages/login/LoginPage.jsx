import React, { useState } from 'react'


function LoginPage () {
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpMode(true);

    };
    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };
  return (
    <div className={`loginContainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
            <div className="signin-signup">
                <form action="#" className="sign-in-form loginForm">
                    <h2 className="title">Sign In</h2>

                    <div className="input-field">
                    <i class="icofont-envelope my-auto mx-auto"></i>
                        <input className="loginInput" type="email" placeholder="Email"/>
                    </div>
                    <div className="input-field">
                    <i class="icofont-lock my-auto mx-auto"></i>
                        <input className="loginInput" type="password" placeholder="Password"/>
                    </div>
                    <button className="btn">Sign In</button>
                    <p className="social-text-loginp">Sign in with social platforms</p>
                    <div className='social-media'>
                        <a href="#" className="social-icon">
                            <i class="icofont-brand-google my-auto mx-auto"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i class="icofont-linkedin my-auto mx-auto"></i>
                        </a>
                    </div>
                </form>
                <form action="#" className="sign-up-form loginForm">
                    <h2 className="title">Sign Up</h2>

                    <div className="input-field">
                        <i className="icofont-user-alt-7 my-auto mx-auto"></i>
                        <input className="loginInput" type="text" placeholder="Username"/>
                    </div>
                    <div className="input-field">
                    <i class="icofont-envelope my-auto mx-auto"></i>
                        <input className="loginInput" type="email" placeholder="Email"/>
                    </div>
                    <div className="input-field">
                    <i class="icofont-lock my-auto mx-auto"></i>
                        <input className="loginInput" type="password" placeholder="Password"/>
                    </div>
                    <button className="btn">Sign Up</button>
                    <p className="social-text-loginp">Sign up with social platforms</p>
                    <div className='social-media'>
                        <a href="#" className="social-icon">
                        <i class="icofont-brand-google my-auto mx-auto"></i>
                        </a>
                        <a href="#" className="social-icon">
                        <i class="icofont-linkedin my-auto mx-auto"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h3 className="loginh3">New Here?</h3>
                    <p className="loginp">
                       Feel free to join us.
                    </p>
                    <button className="btn transparent" onClick={handleSignUpClick}>Sign Up</button>
                </div>
                <img src="src/assets/images/category/login1.png" className="image" alt=""/>
            </div>
            <div className="panel right-panel">
                <div className="content">
                    <h3 className="loginh3">One Of Us?</h3>
                    <p className="loginp">
                        Welcome back!
                    </p>
                    <button onClick={handleSignInClick} className='btn transparent' id="sign-in-btn">
                        Sign In
                    </button>
                </div>
                <img src="src/assets/images/category/login2.png" className="image"/>
            </div>
        </div>
    </div>
  )
}

export default LoginPage