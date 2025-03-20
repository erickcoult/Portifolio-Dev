import { SectionTitle } from "@/app/components/section-title";
import { KnownTech } from "./know-tech";
import { KnownTech as IKnownTech } from "@/app/types/projects";

type KnownTechsProps = {
  techs: IKnownTech[];
};

export const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competência" title="Conhecimentos"></SectionTitle>

      <div className="grid grid-cols-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-[60px]">
        {techs?.map((tech) => (
          <KnownTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};
