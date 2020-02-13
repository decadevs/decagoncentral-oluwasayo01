import React from 'react';
import { Image } from 'semantic-ui-react'


const Logo = () => {
    return (
        <div style={{position: 'absolute', left: '20%', top: '40%'}}>
            <Image src='/assets/decagon-logo23.png' style={{backgroundColor: 'black', opacity: '1.0'}}/>
            <p style={{width: '340px', color: 'white', fontWeight: 'bold'}}>
                Decagon is a software engineering institute ushering in a new phase of tech-powered growth and
                prosperity in Nigeria by training and deploying an army of leader-developers.</p>
        </div>
    )
}


export default Logo;