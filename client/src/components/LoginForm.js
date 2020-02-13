import React, {useState} from 'react'
import { Button, Header, Container,  Form, Grid } from 'semantic-ui-react'
// import { link } from 'react-router'


function LoginForm(props) {
    const [credentials, setCredenials] = useState({username:'',
                                                                                 password:''})
    
    const inputChanged = event => {
        setCredenials({...credentials ,[event.target.name]: event.target.value});
    }

    const login = (event) => {
        event.preventDefault();
        fetch('http://localhost:8000/auth/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials) })
            .then(data => data.json())
            .then(data => {props.userLogin(data.token)})
            .catch( error => console.log(error));   
    }

    return (
    <Grid  verticalAlign='middle' style={{height: '100vh'}}>
        <Grid.Column >
            <Container text >
                <Header as='h2'>Login</Header>
                    <Form >
                        <Form.Field>
                        <label>Username:</label>
                        <input className="bg-red" type="text" required 
                        onChange={inputChanged}
                        name="username"
                        backgroundcolor="red"/>
                        </Form.Field>
                        <Form.Field>
                        <label>Password</label>
                        <input type="password" required 
                        onChange={inputChanged}
                        name="password" />
                        </Form.Field>
                        <div style={{display: 'flex'}}>
                        <Button positive type='submit' onClick={login}>Submit</Button>
                        <span style={{margin: '9px 0px 0px 5px'}}><a href='/registerpage'>create an account</a></span>
                        </div>
                    </Form>
            </Container>
        </Grid.Column>
    </Grid> 
    )
}
export default LoginForm