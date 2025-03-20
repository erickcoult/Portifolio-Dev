import { Link } from "@/app/components/link";
import { SectionTitle } from "@/app/components/section-title";
import { HiArrowNarrowLeft } from "react-icons/hi";

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projetos"
        title="Meus projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />

      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center mas-w-[640px] my-6 text-sm sm:text-base">
          Aqui você poderá ver alguns dos meus tranalhos que eu desenvolvi!
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
        </Link>
      </div>
    </section>
  );
};
