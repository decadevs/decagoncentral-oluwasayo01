import React from 'react'
import { Container } from 'semantic-ui-react'
import '../App.css'

const card_props =  {
    width: '30vw',
    height: '25vh',
    border: '1px solid white',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '20px',
    marginTop: '40px',
    backgroundColor: 'white',   
}

const list = [
    {
        heading: 'Find a dev',
        description: 'Change your profile name, picture, twitter handle and bio.',
        comment: 'Search Devs',
        image: '/assets/Image 3.png'
    },
    {
        heading: 'Update Profile',
        description: 'Change your profile name, picture, twitter handle and bio.',
        comment: 'Update Profile',
        image: '/assets/Image 1.png'
    },
    {
        heading: 'Update Password',
        description: 'Update your password',
        comment: 'Update',
        image: '/assets/Image 4.png'
    },
]


const SmallCard = () => (
    <div id="smallcard">
        {list.map(item => (
        <Container style={card_props}>
                <div style={{width:'260px', margin:'30px'}}>
                    <h1>{item.heading}</h1>
                     <p style={{width: '180px'}}>{item.description}</p>
                    <div>{item.comment} <span><img src="/assets/right-arrow (2)-1.png" alt="arrow"/></span></div>
                </div>
                <div style={{marginRight:'30px', marginTop: '25px'}}><img src={item.image} alt="tooling" style={{height:'15vh', opacity:'1'}}/></div>
        </Container>
        ))}
    </div>
)

export default SmallCard