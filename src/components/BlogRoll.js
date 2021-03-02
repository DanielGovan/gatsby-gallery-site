import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import { InternalLink } from "../Elements/links"
import Img from "gatsby-image"

const StyledBlogRoll = styled.div`
  margin: 80px auto 0;
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`

const Article = styled.article`
  header {
    position: relative;
    .post-meta,
    p {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.3);
      padding: 10px;
      h2 {
        margin: 0 auto;
      }
    }
    p {
      background: rgba(0, 0, 0, 0.6);
      top: auto;
      bottom: 0;
      margin: 0;
    }
  }
  img {
    max-width: 100%;
  }
`

const FeaturedImage = styled(Img)``

const BlogRoll = ({ data, count }) => {
  const { edges: posts } = data.allMarkdownRemark
  console.log("data.allMarkdownRemark", data.allMarkdownRemark)

  //restructre the html:
  // whole thing linkable
  // h1 in the image

  return (
    <StyledBlogRoll>
      {posts &&
        posts.map(({ node: post }) => (
          <Article>
            <InternalLink target={post.frontmatter.path}>
              <header>
                <FeaturedImage
                  fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                />
                <div className="post-meta">
                  <h2>{post.frontmatter.title}</h2>
                  <span>{post.frontmatter.date}</span>
                </div>
                <p>
                  {post.excerpt}
                  <br />
                  <InternalLink target={post.frontmatter.path}>
                    Keep Reading →
                  </InternalLink>
                </p>
              </header>
            </InternalLink>
          </Article>
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
