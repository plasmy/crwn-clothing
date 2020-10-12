import React from 'react'
import {connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import './sign-in.style.scss'

class SignIn extends React.Component {
    constructor(props) {
        super()

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        const { email, password } = this.state
        const { emailSignInStart } = this.props

        console.log(email)

        emailSignInStart(email, password)
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props
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
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)