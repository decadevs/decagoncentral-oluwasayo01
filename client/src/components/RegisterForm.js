import React, { useState } from 'react'
import { Button, Header, Container,  Form, Grid } from 'semantic-ui-react'

// function LoginForm() {
    
    
    function RegisterForm () {
        
        const register = (event) => {
            event.preventDefault();
            console.log("You clicked register")
            console.log(data)
            console.log(JSON.stringify(data))
            fetch('http://localhost:8000/api/users/', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data) })
                    .then(data => data.json())
                    .then(data => {console.log(data.token)})
                    .catch( error => console.log(error));   
                }
    
        const [data, setData] = useState({username:'',
                            password:'',
                            email:'',
                            position:'',
                            fullname:''})
        
        const inputChanged = event => {
            console.log(event.target.value)
            setData({...data ,[event.target.name]: event.target.value});
        }

    return (

    <Grid  verticalAlign='middle' style={{height: '100vh'}}>
        <Grid.Column >
            <Container text >
                <Header as='h2'>Create Profile</Header>
                    <Form>
                        <Form.Field>
                            <label>Fullname:</label>
                            <input onChange={inputChanged} type="text" name="fullname"/>
                            <label>Username:</label>
                            <input onChange={inputChanged} type="text" name="username" />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input onChange={inputChanged} type="password" name="password" />
                        </Form.Field>
                        <Form.Field>
                            <label>Email Address</label>
                            <input onChange={inputChanged} type="email" name="email" />
                        </Form.Field>
                        <Form.Field>
                        <label>Position</label>
                            <select onChange={inputChanged} name="position">
                                <option value="beginner" defaultValue>Newbie</option>
                                <option value="student">Student</option>
                                <option value="tl">Tech Lead</option>
                                <option value="pm">Project Manager</option>
                            </select>
                        </Form.Field>
                        <div style={{display: 'flex'}}>
                            <Button positive type='submit' onClick={register}>Join Now</Button>
                            <p style={{margin: '9px 0px 0px 5px'}}><span>Login</span></p>
                        </div>
                    </Form>
            </Container>
        </Grid.Column>
    </Grid>
)

}
    
export default RegisterForm;