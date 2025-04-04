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
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dolor beatae fugiat corrupti, consectetur architecto autem eum
          aperiam, quasi perspiciatis saepe fuga veritatis dicta. Beatae sunt ea
          laborum? Perferendis, laudantium.
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
