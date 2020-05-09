import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlankPageTemplate = ({ title, content, contentComponent, step, goal, output }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h1>
        {title}
      </h1>
      <PageContent content={content} />
    </section>
  )
}

BlankPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const BlankPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlankPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

BlankPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlankPage

export const aboutPageQuery = graphql`
  query BlankPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
