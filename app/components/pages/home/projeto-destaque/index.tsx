import { HorizontalDivider } from "@/app/components/divisor/horizontal";
import { SectionTitle } from "@/app/components/section-title";
import { ProjectCard } from "./cards";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/types/projects";

type ProjetoDestaqueProps = {
  projects: Project[];
};

export const ProjetoDestaque = ({ projects }: ProjetoDestaqueProps) => {
  return (
    <section className="container py-16">
      <SectionTitle
        subtitle="destaques"
        title="Projetos em destaque"
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
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/Projeto" className="inline-flex">
            Ver Todos
            <HiArrowNarrowRight></HiArrowNarrowRight>
          </Link>
        </p>
      </div>
    </section>
  );
};
