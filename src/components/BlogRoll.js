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
    .post-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5);
      padding: 10px;
      h2 {
        margin: 0 auto;
      }
      span {
        font-size: 0.8rem;
      }
      p {
        margin: 0.5rem 0 0;
      }
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
                <div className="post-content">
                  <h2>{post.frontmatter.title}</h2>
                  <span>{post.frontmatter.date}</span>
                  <p>{post.excerpt}</p>
                </div>
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
