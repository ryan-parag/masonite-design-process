import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const DefaultPageTemplate = ({ title, content, contentComponent, goal, output }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h1>
        {title}
      </h1>
      <div className="u-pt--lg u-pb--lg u-pr--lg u-pl--lg rounded u-bg--blue u-text--white u-mt--xl u-text-shadow">
        <h5 className="u-mt--0">Goal:</h5>
        <p className="u-mt--0 u-mb--0">{goal}</p>
      </div>
      <div className="u-pt--lg u-pb--lg u-pr--lg u-pl--lg rounded u-bg--green u-text--white u-mb--xxl u-mt--lg u-text-shadow">
        <h5 className="u-mt--0">Output:</h5>
        <p className="u-mt--0 u-mb--0">{output}</p>
      </div>
      <PageContent content={content} />
    </section>
  )
}

DefaultPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const DefaultPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <DefaultPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        goal={post.frontmatter.goal}
        output={post.frontmatter.output}
      />
    </Layout>
  )
}

DefaultPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DefaultPage

export const aboutPageQuery = graphql`
  query DefaultPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        goal
        output
      }
    }
  }
`
