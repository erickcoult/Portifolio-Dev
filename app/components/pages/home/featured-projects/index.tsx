import { HorizontalDivider } from '@/app/components/divider/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import { ProjectCard } from './cards'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/app/types/projects'

type FeaturedProjectsProps = {
  projects: Project[]
}

export const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle
        subtitle="featured"
        title="Featured Projects"
      ></SectionTitle>
      <HorizontalDivider className="mb-16"></HorizontalDivider>

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Want to see more?</span>
          <Link href="/projects" className="inline-flex">
            View all
            <HiArrowNarrowRight></HiArrowNarrowRight>
          </Link>
        </p>
      </div>
    </section>
  )
}
