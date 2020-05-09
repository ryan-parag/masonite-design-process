import React from 'react'
import PropTypes from 'prop-types'
import { DefaultPageTemplate } from '../../templates/about-page'

const DefaultPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

DefaultPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DefaultPagePreview
