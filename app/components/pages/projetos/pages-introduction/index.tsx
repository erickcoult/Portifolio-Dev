'use client'

import { Link } from "@/app/components/link";
import { SectionTitle } from "@/app/components/section-title";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { motion } from 'framer-motion'

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projetos"
        title="Meus projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />

      <motion.div className="flex flex-col items-center"
      initial={{opacity: 0 ,y:100 }}
      whileInView={{opacity:0, y:0}}
      exit={{opacity:0, y:100}}
      transition={{duration: 0.6}}
      
      >
        <p className="text-gray-400 text-center mas-w-[640px] my-6 text-sm sm:text-base">
          Aqui você poderá ver alguns dos meus tranalhos que eu desenvolvi!
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
        </Link>
      </motion.div>
    </section>
  );
};
