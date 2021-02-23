import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import { InternalLink } from "../Elements/links"
import Img from "gatsby-image"

const StyledBlogRoll = styled.div``

const Article = styled.article`
  img {
    max-width: 100%;
  }
`

const FeaturedImage = styled(Img)``

const BlogRoll = ({ data, count }) => {
  const { edges: posts } = data.allMarkdownRemark
  console.log("data.allMarkdownRemark", data.allMarkdownRemark)

  return (
    <StyledBlogRoll>
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-6" key={post.id}>
            <Article>
              <header>
                <FeaturedImage
                  fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                />
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
            </Article>
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
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 1024) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
