import React from 'react'
import { Image, Grid } from 'semantic-ui-react';
import RegisterForm from './RegisterForm';
import '../App.css';
import Logo from './Logo'


const RegisterPage = () => (
    <Grid style={{height: '100vh'}}>
        <Grid.Row style={{height: '100vh'}}>
            <Grid.Column style={{width:'40vw', position: 'relative'}}>
                 <Image className='logo-block' src='/assets/background.png' style={{height: '100vh', position: 'absolute', top: '0', verticalAlign: 'middle'}} />
                 <Logo style={{position: 'absolute', top: '0', left: '0'}}/>
            </Grid.Column>
            <Grid.Column style={{width: '60vw'}}>
                <RegisterForm style={{height: '100vh'}}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)
export default RegisterPage