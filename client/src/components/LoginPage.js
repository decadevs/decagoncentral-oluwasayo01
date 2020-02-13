import React, { useState } from 'react'
import { Image, Grid } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import '../App.css';
import Logo from './Logo'


const LoginPage = (props) => {
    const [token, setToken] = useState('')
    
    const userLogin = (usertoken) => {
        setToken(usertoken)
        if (token) {
            props.history.push('/dashboard')
        }         
    }
    
    return (
    <Grid style={{height: '100vh'}}>
        <Grid.Row style={{height: '100vh'}}>
            <Grid.Column style={{width:'40vw', position: 'relative'}}>
                 <Image className='logo-block' src='/assets/background.png' style={{height: '100vh', opacity: 0.8, position: 'absolute', top: '0', verticalAlign: 'middle', backgroundColor: 'black'}} />
                 <Logo style={{position: 'absolute', marginTop:'20px'}}/>
            </Grid.Column>
            <Grid.Column style={{width: '60vw'}}>
                <LoginForm  style={{height: '100vh'}} userLogin={userLogin}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)
}
export default LoginPage