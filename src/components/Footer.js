import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="c-footer">
        <h6 className="u-mb--md u-mt--0">About</h6>
        <p className="u-mb--0 u-mt--0">
          <small>
          The methods documented in this step-by-step process are a collection of practical, flexible workflows a designer may use to help create a design process for themselves or for their organization. This process is based off of the formal design process used by the awesome folks at Intercom.
          </small>
        </p>
      </footer>
    )
  }
}

export default Footer
