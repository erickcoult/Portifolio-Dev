import { WorkExperience } from "./components/pages/home/experiencia-prof";
import { HeroSection } from "./components/pages/home/hero-section";
import { KnownTechs } from "./components/pages/home/know-techs";
import { ProjetoDestaque } from "./components/pages/home/projeto-destaque";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

export const metadata ={
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
  `;

  return fetchHygraphQuery(
    query,
    0 //Após a conclusão,  inserir 60 * 60 * 24  isso vai dizer que o cache será guardado por 24h, ou seja, caso houver alguma atualização no conteúdo, apenas daqui 24h aparecerá no client.
  );
};

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData();

  return (
    <>
      <HeroSection homeInfo={pageData}></HeroSection>
      <KnownTechs techs={pageData.knownTechs} />
      <ProjetoDestaque projects={pageData.highlightProjects}></ProjetoDestaque>
      <WorkExperience experiences={workExperiences} />
    </>
  );
}
