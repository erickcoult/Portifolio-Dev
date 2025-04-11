import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'
import { WorkExperience as IWorkExperience } from '@/app/types/work-experience'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container w-full py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiência"
          title="Experiência Profissional"
        ></SectionTitle>
        <p className="text-gray-400 mt-6">
          Desenvolvedor júnior com formação em Análise e Desenvolvimento de
          Sistemas e experiência prática em projetos web utilizando Node.js,
          JavaScript, React e MongoDB. Desenvolvi soluções focadas em cadastro
          de usuários, consumo de APIs e sistemas responsivos. Tenho facilidade
          com aprendizado rápido, trabalho em equipe e gosto de criar soluções
          eficientes e bem estruturadas. Também possuo conhecimentos em
          hospedagem de sites e deploys em Vercel.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  )
}
