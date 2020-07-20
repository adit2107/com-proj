import React from 'react';

import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/signup/signup.component'

import './sign-in-sign-up.styles.scss'

const SignInAndSignUp = () => (
    <div className='signinsignup'>
        <SignIn />
        <SignUp /> 
    </div>
)

export default SignInAndSignUp; 