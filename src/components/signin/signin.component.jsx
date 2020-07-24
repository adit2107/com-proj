import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInWithGoogle} from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';

import './signin.styles.scss';

class SignIn extends React.Component{
constructor(props){
    super(props);

    this.state = {
        email: '',
        password: ''
    }
}

handleSubmit = async (e) =>{
e.preventDefault();

const {email, password} = this.state;
try{
    await auth.signInWithEmailAndPassword(email, password);
    this.setState({email: '', password: ''});
} catch(error){
    if(error.code === 'auth/wrong-password'){
        alert('Please verify the password entered.')
    } else {
        alert('That e-mail address is not registered. Please sign up first.')
    }
}
}

handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({[name]: value});
}
render (){
    return(
       <div className='sign-in'>
           <h2 className='title'>I already have an account</h2>
           <span>Please sign in with your email and password</span>

           <form onSubmit={this.handleSubmit}>
           <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
               <CustomButton type="submit">Sign In</CustomButton>
               <CustomButton type="button" isGoogleSignIn onClick={SignInWithGoogle}>Sign In with Google</CustomButton>
          </div>
              
           </form>
       </div> 
    )
}
}

export default SignIn;