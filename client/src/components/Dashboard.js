import React, { Component } from 'react'
import { Grid, Image, Container } from 'semantic-ui-react'
import '../App.css'
import LargeCard from './LargeCard'
import SmallCard from './SmallCard'
export default class Dashboard extends Component {
  render() {
    return (
      <Grid style={{backgroundColor: '#F2F6FA'}}>
        <Grid.Column width={3} style={{height: '100vh', backgroundColor: 'black'}}>
           <Image id="logo" src='/assets/decagon-logo23.png' alt="" style={{opacity: '1', backgroundColor:'black'}}/>
            <div id="menu">
                <h2><img className="img-ml" src="/assets/outline-dashboard-24px.png" alt=""/> Dashboard</h2>
                <h2><img className="img-ml" src="/assets/user (1).png" alt=""/> My Profile</h2>
                <h2><img className="img-ml" src="/assets/warning (1).png" alt=""/> Assignment</h2>
            </div>
        </Grid.Column>
        <Grid.Column width={11} height='100vh'>
          <Container style={{width: '100%', position: 'relative'}}>
            <LargeCard></LargeCard>
            <SmallCard></SmallCard>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}