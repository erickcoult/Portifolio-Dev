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
          subtitle="experience"
          title="Professional Experience"
        ></SectionTitle>
        <p className="text-gray-400 mt-6">
          Junior developer with a degree in Systems Analysis and Development and
          hands-on experience building web projects with Node.js, JavaScript,
          React and MongoDB. I have worked on user registration flows, API
          integration and responsive interfaces, as well as website hosting and
          deployments to Vercel. I learn quickly, work well in teams and enjoy
          building efficient, well-structured solutions.
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
