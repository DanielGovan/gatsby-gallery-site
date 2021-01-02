// GetExhibitionImages
const data1 = useStaticQuery(graphql`
  query exhibitionImages {
    allFile(
      filter: {
        sourceInstanceName: { eq: "exhibitionImages" }
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)

// GetGalleryImages
const data2 = useStaticQuery(graphql`
  query galleryImages {
    allFile(
      filter: {
        sourceInstanceName: { eq: "galleryImages" }
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)

// GetTestimonialImages
const data3 = useStaticQuery(graphql`
  query testimonialImages {
    allFile(
      filter: {
        sourceInstanceName: { eq: "testimonialImages" }
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)

// GetSiteImages
const data4 = useStaticQuery(graphql`
  query siteImages {
    allFile(
      filter: {
        sourceInstanceName: { eq: "siteImages" }
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)
