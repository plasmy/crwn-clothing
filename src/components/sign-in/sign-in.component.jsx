import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.style.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        handleChange={this.handleChange}
                        type='email'
                        value={this.state.email}
                        label='Email' required 
                    />
                    
                    <FormInput
                        name='password'
                        label='Password'
                        handleChange={this.handleChange}
                        type='password'
                        value={this.state.password}
                        required />
                    
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn