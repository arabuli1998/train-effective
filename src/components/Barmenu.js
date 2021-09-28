import React from 'react';
import { Link } from 'react-scroll';
import { Box } from '@material-ui/core';

class Barmenu extends React.Component {
  state = { className: '' };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 400) {
      if (!this.state.className) {
        this.setState({ className: 'blue' });
      }
    } else {
      if (this.state.className) {
        this.setState({ className: '' });
      }
    }
  };

  render() {
    return (
      <header ref={(r) => (this.ref = r)} className={this.state.className}>
        <input type="checkbox" id="open"></input>
        <div className="two">
          {' '}
          <Link to="main" className="logo" smooth={true} duration={1000}>
            LO GO
          </Link>
          <label for="open" className="label">
            XyX
          </label>
        </div>
        <ul className="ul">
          <li className="li">
            <Link to="second" smooth={true} duration={1000}>
              BOOT CAMP
            </Link>
          </li>
          <li className="li">
            <Link to="three" smooth={true} duration={1000}>
              JOIN
            </Link>
          </li>
          <li className="li">ABOUT ALTEXSOFT</li>
          <li className="li">
            {' '}
            <Link to="seven" smooth={true} duration={1000}>
              WE OFFER
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}
export default Barmenu;
