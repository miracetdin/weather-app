import React, { Fragment } from 'react';

function Footer() {
  return (
    <Fragment>
      <div>
        <p>Geliştirici: Miracetdin Yıldız</p>
        <div>
          <ul className='d-flex list-unstyled' style={{listStyleType: "none"}}>
            <li style={{ display: "flex", alignItems: "center" }}>
              <a href="https://www.linkedin.com/in/miracetdinyildiz/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png" alt="LinkedIn" style={{width: "2rem"}} />
              </a>
              <span style={{paddingLeft: "1rem"}}>miracetdinyildiz</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", marginLeft: "1rem"}}>
              <a href="https://github.com/miracetdin">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/640px-Octicons-mark-github.svg.png" alt="GitHub" style={{width: "2rem"}} />
              </a>
              <span style={{paddingLeft: "1rem"}}>miracetdin</span> 
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
};

export default Footer;
