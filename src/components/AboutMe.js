import React, { Component } from 'react';
import { Heading, Link, Paragraph } from '@auth0/cosmos';

class AboutMe extends Component {

  state = {
    adUrl: null,
    vidId: null,
    vidName: null
  }

  componentDidMount() {
    var elem = document.querySelector('.modal');
    this.props.M.Modal.init(elem, {
      endingTop: '50%',
      onOpenStart() {
        console.log(elem)
      }
    });

  }
  
  render() { 
    return(
      <div className="about">

  {/* <!-- Modal Trigger --> */}
  {/* <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}

  {/* <!-- Modal Structure --> */}
  <div id="modal1" className="modal">
    <div className="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>

        <div>
          <Heading size={1}>
            I Little About Me
          </Heading>
          <div className="divider"></div>

          <Heading size={2}>
            My Life
          </Heading>
          <Paragraph>
            I enjoy spending a ton of time perfecting the artistry of parenthood and watching my two boys grow, locking in just the two of us time with my wife to watch "Game of Thrones" or "The Walking Dead", and traveling whenever the opportunity presents itself. I entered the development/engineering industry back in the Flash ActionScript days and evolved with the industry as times changed. Some HTML 5 ad evolution, <a className="modal-trigger" href="#modal1">Thing One</a>, <a className="modal-trigger" href="#modal1">Thing Two</a>, and <a className="modal-trigger" href="#modal1">Thing Three</a>. I enjoy sitting in the middle and collaborating with Designers and Back-End developers to bring ideas to life.
          </Paragraph>

          <Heading size={2}>
            I'm A Developer
          </Heading>

          <Paragraph>
            Currently, I work for <Link href="https://www.trusted.com">Trusted.com</Link> on a small team distributed throughout the U.S. We've updated the site with a new look, as well as features, with more updates to come in the backlog. We also spend time on a side project <Link href="http://www.cyberledger.com">Cyberledger</Link> which is in development and getting feedback from potential clients.
          </Paragraph>

          <Paragraph>
            Trusted is a great place to work. We communicate well via Slack being a distributed team, I got the opportunity to learn some Kendo UI which I never touched prior, and I get to avoid the tough DMV (D.C, Maryland, Virginia) commutes. But like most folks, I always seek more. Not necessarily stuff or money, but to learn more, grow career-wise and be part of something that is making a huge impact in its space.
          </Paragraph>
        </div>
      </div>
    )
  }
}

export default AboutMe;