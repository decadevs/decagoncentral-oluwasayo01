import React from 'react'
import { Container } from 'semantic-ui-react'

const card_props =  {
    width: '60vw',
    height: '25vh',
    border: '10px solid white',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '20px 20px 0px 0px',
    marginTop: '40px',
    backgroundColor: 'white',   
}

const LargeCard = () => (
    <Container style={card_props}>
            <div style={{width:'280px', margin:'30px'}}>
                <h1>Hi Bond!!</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking at it's layout.
                </p>
            </div>
            <div style={{marginRight:'30px', marginTop:'-3px'}}><img src='/assets/Image 5.png' alt="" style={{height:'25vh', opacity:'1'}}/></div>
    </Container>
)

export default LargeCard