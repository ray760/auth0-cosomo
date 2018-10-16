import React, { Component } from 'react';
import { Heading, Link, Paragraph } from '@auth0/cosmos';
import YtVideo from './ytVideo';

class AboutMe extends Component {

  componentDidMount() {
    const elem = document.querySelector('.modal');
    this.props.M.Modal.init(elem, {
      endingTop: '50%',
      onCloseStart(){
        const player = document.getElementById('ytplayer');
        player.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
      }
    });
  }
  
  handleOnClick = (e) => {
    e.preventDefault();
    let vidId = e.target.getAttribute('data-vidid');
    this.refs.child.onSetVidId(vidId);
  }

  render() { 
    return(
      <div className="about">

        <div id="modal1" className="modal">
          <div className="modal-content">
            <div className="row">
              <a className="material-icons modal-close right">close</a>
            </div>
            
            <YtVideo ref="child" />
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
            I enjoy spending a ton of time perfecting the artistry of parenthood and watching my two boys grow, locking in just the two of us time with my wife to watch "Game of Thrones" or "The Walking Dead", and traveling whenever the opportunity presents itself. I entered the development/engineering industry back in the Flash ActionScript days and evolved with the industry as times changed. Some HTML 5 ad evolution, <Link className="modal-trigger" href="#modal1" data-vidid="P8Fj4b94WhY" onClick={this.handleOnClick}>Thing One</Link>, <Link className="modal-trigger" href="#modal1" data-vidid="fKhPOgYQTlU" onClick={this.handleOnClick}>Thing Two</Link>, and <Link className="modal-trigger" href="#modal1" data-vidid="EOQqnArREmg" onClick={this.handleOnClick}>Thing Three</Link>. I enjoy sitting in the middle and collaborating with Designers and Back-End developers to bring ideas to life.
          </Paragraph>

          <Heading size={2}>
            I'm A Developer
          </Heading>

          <Paragraph>
            Currently, I work for <Link href="https://www.trusted.com" target="_blank">Trusted.com</Link> on a small team distributed throughout the U.S. We've updated the site with a new look, as well as features, with more updates to come in the backlog. We also spend time on a side project <Link href="http://www.cyberledger.com" target="_blank">Cyberledger</Link> which is in development and getting feedback from potential clients.
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