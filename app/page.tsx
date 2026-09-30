import { WorkExperience } from './components/pages/home/professional-experience'
import { HeroSection } from './components/pages/home/hero-section'
import { KnownTechs } from './components/pages/home/know-techs'
import { FeaturedProjects } from './components/pages/home/featured-projects'
import { HomePageData } from './types/page-info'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'

export const metadata = {
  title: 'Home',
}

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
  page(where: {slug: "home"}) {
    introduction {
      raw
    }
    technologies {
      name
    }
    profilePicture {
      url
    }
    socials {
      url
      iconSvg
    }
    knownTechs {
      iconSvg
      name
      startDate
    }
     highlightProjects {
      slug
      thumbnail {
      url
      }
      title
      shortDescription
      technologies {
      name
      }
    }
  }
  workExperiences {
      companyLogo {
      url
      }
      role
      companyName
      companyUrl
      startDate
      endDate
      description {
      raw
      }
      technologies {
      name
      }
    }
}
  `

  return fetchHygraphQuery(
    query,
    0, // After completion, use 60 * 60 * 24 to cache the content for 24 hours before refreshing it on the client.
  )
}

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData}></HeroSection>
      <KnownTechs techs={pageData.knownTechs} />
      <FeaturedProjects
        projects={pageData.highlightProjects}
      ></FeaturedProjects>
      <WorkExperience experiences={workExperiences} />
    </>
  )
}
