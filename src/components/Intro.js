import React from 'react';
import { Alert, Paragraph } from '@auth0/cosmos'
const Intro = () => {
  return(
    <div className="intro">
      <div className="container">
        <Alert type="warning" icon="warning" title="Notice!" dismissible>This is an important message! I want to join the Auth0 team.</Alert>
        <Paragraph className="center">
        If you're here right now then more than likely you're an Auth0 employee, and that's awesome because I'd like to be one too. So here's my simple pitch!
        </Paragraph>
      </div>
    </div>
  )
}

export default Intro;