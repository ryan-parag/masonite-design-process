import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/mdit-logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="c-nav"
        role="navigation"
        aria-label="main-navigation"
      >
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="Masonite Digital Innovation Team" className="c-logo" />
        </Link>
        <div className="container">
          <h6 className="u-mt--xl">Design Process Steps</h6>
          <ul className="c-list-nav u-mt--0">
          <li className="c-list-nav__item">
              <Link to="/" className="c-list-nav__link" activeClassName="c-list-nav__link--active">
                Introduction
              </Link>
            </li>
            <li className="c-list-nav__item">
              <Link to="/discover" className="c-list-nav__link" activeClassName="c-list-nav__link--active">
                1. Discover
              </Link>
            </li>
            <li className="c-list-nav__item">
              <Link to="/concept" className="c-list-nav__link" activeClassName="c-list-nav__link--active">
                2. Concept
              </Link>
            </li>
            <li className="c-list-nav__item">
              <Link to="/scope" className="c-list-nav__link" activeClassName="c-list-nav__link--active">
                3. Scope
              </Link>
            </li>
            <li className="c-list-nav__item">
              <Link to="/detail" className="c-list-nav__link" activeClassName="c-list-nav__link--active">
                4. Detail
              </Link>
            </li>
            <li className="c-list-nav__item">
              <Link to="/build" className="c-list-nav__link" activeClassName="c-list-nav__link--active">
                5. Build
              </Link>
            </li>
          </ul>
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            D
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
