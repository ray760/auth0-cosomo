import React from 'react';
import { Alert, Heading, Paragraph } from '@auth0/cosmos';

const Intro = () => {
  return(
    <div className="intro">


      <Heading size={1}>Hi, I'm <span className="impact-text">Ray Robertson</span></Heading>

      <Alert type="information" icon="megaphone" title="FYI!" dismissible={false}>This is an important message! I want to join the <span className="bold-text">Auth0</span> team.</Alert>
      
      <Paragraph>
      If you're here right now then more than likely you're an <span className="bold-text">Auth0</span> employee, and that's awesome because I'd like to be one too. So here's my simple pitch!
      </Paragraph>

      <Heading size={2}>
        About This Page
        <div class="divider"></div>
      </Heading>
            
      <Paragraph>
        
      </Paragraph>

    </div>
  )
}

export default Intro;