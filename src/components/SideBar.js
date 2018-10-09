import React from 'react';
import { Link } from '@auth0/cosmos';

const SideBar = () => {
  return(
    <ul className="sidebar">
      <li>
        <Link href="https://github.com/ray760?tab=repositories">
          <i className="fa fa-github" aria-hidden="true"></i>
          GitHub
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/rayarobertson">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          Likedin Profile
        </Link>
      </li>
      <li>
        <Link href="http://www.rayfolio.com/auth0/docs/Ray-Robertson-Resume-2018.pdf">
          <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
          My Resume
        </Link>
      </li>
      <li>
        <Link href="mailto:ray760@yahoo.com?Subject=Auth0%20UI%20Engineer">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          Email Me
        </Link>
      </li>
    </ul>
  )
}

export default SideBar;