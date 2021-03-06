import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
// import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        title
        description
        feature
        github
        id
        url
        slug
        stack {
          id
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
const IndexPage = ({ data }) => {
  const { nodes: projectsData } = data.allStrapiProjects

  return (
    <>
      <Seo title={"Home"} />
      <main>
        <Hero />
        <Services />
        <Projects
          projectsData={projectsData}
          title={"Wichtige Projekte"}
          showLink
        />
      </main>
    </>
  )
}

export default IndexPage
