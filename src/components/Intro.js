import React from 'react';
import { Alert, Heading, Link, Paragraph } from '@auth0/cosmos';

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
        <div className="divider"></div>
      </Heading>
            
      <Paragraph>
        I started by reviewing the <span className="bold-text">Auth0</span> dashboard and <Link href="https://styleguide.auth0.com" target="_blank">styleguide.auth0</Link> to see how content was structured and implemented. From there I looked into Cosmos and thought I would incorporate a personalized pitch that mimicked the look and feel of the Auth0 dashboard. To work efficiently I started with <Link href="https://github.com/facebook/create-react-app" target="_blank">create-react-app</Link> to get the development process going and as I was reading up on <Link href="https://materializecss.com/" target="_blank">MaterializeCsss</Link> I decided to incorporate it into the project as well.
      </Paragraph>

      <Paragraph>
        Standardization and consistency are key components in creating a great user experience. These two aspects also help in the development process by allowing developers to be more agile and speedy in their delivery of updates and new features. <span className="bold-text">Auth0</span> has clearly done a great job in this department and this only makes me more fascinated with the company and being part of its team.
      </Paragraph>

    </div>
  )
}

export default Intro;