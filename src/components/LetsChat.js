import React from 'react';
import { Heading, Link, Paragraph } from '@auth0/cosmos';

const LetsChat = () => {
  return(
    <div className="chat">
      <div>
        <Heading size={1}>
          Can We Chat?
        </Heading>
        <div className="divider"></div>

        <Heading size={2}>
          How I Got Here
        </Heading>
        <Paragraph>
          While learning about PassportJS and JWT I saw the "Supported by" and clicked to see Auth0 was and what they did. After exploring the website and learning about the company I immediately looked for the careers link to see if I could possibly be a part of "helping make the internet a better place". What Auth0 brings to the development community in invaluable, and the culture and foundation created for employees look to be on par or above those set by larger organizations.
        </Paragraph>

        <Paragraph>
        Knowing this would be an arduous endeavor I thought to myself it would be worth it taking a shot to be part of something I find intriguing, cutting edge and full of great minds that could push me and also learn from me as well. I took the time out to make this page ( checkout the repo ) because I wanted to set myself apart and let you all know that being part of your team is something that excites me and that feeling is one I haven't felt in a while. If you got this far then I hope that we can talk soon about my interst in the UI engineering roles.
        </Paragraph>

      </div>
    </div>
  )
}

export default LetsChat;