import React, { Component } from 'react';

class YtVideo extends Component {

  state = {
    vidId: null
  }

  onSetVidId(vidId) {
    this.setState({ vidId })
  }

  render() {
    const url = "https://www.youtube.com/embed/" + this.state.vidId +"?enablejsapi=1&amp;rel=0&amp;showinfo=0";

    return (
      <div className="responsive-ytv">
        <iframe id="ytplayer" frameBorder="0" allowFullScreen="1" allow="autoplay; encrypted-media" title="YouTube video player" width="640" height="390" src={url}></iframe>
      </div>
    )
  }
}

export default YtVideo;