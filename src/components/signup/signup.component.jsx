import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('passwords do not match!');
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
            })
        } catch (error){
            console.log('unable to sign up', error);
        }
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
           <h2>Don't have an account yet?</h2>
           <span>Sign up with an e-mail and password</span>

           <form onSubmit={this.handleSubmit}>
           <FormInput
            name='displayName'
            type='text'
            handleChange={this.handleChange}
            value={displayName}
            label='display name'
            required
          />
           <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={this.handleChange}
            label='password'
            required
          />
           <FormInput
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='confirm password'
            required
          />
          <div className='buttons'>
               <CustomButton type="submit">Sign Up</CustomButton>
          </div>
              
           </form>
       </div> 
        )
    }
}

export default SignUp;