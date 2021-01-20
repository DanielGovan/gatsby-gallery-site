import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import { InternalLink } from "../Elements/links"

const StyledBlogRoll = styled.div``

const BlogRoll = ({ data, count }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <StyledBlogRoll>
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-6" key={post.id}>
            <article
              className={`blog-list-item tile is-child box notification ${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}
            >
              <header>
                <p className="post-meta">
                  <InternalLink target={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </InternalLink>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <InternalLink target={post.frontmatter.path}>
                  Keep Reading →
                </InternalLink>
              </p>
            </article>
          </div>
        ))}
    </StyledBlogRoll>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)

// https://developer.okta.com/blog/2020/02/18/gatsby-react-netlify
