'use client'

import { Button } from '@/app/components/button'
import { CMSIcon } from '@/app/components/cms-icon'
import { RichText } from '@/app/components/rich-text'
import { TechBadge } from '@/app/components/tech-badge'
import { HomePageInfo } from '@/app/types/page-info'
import Image from 'next/image'
import { use } from 'react'
import { HiArrowNarrowRight, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { techBadgeAnimation } from '@/app/lib/animation'

type HomeSectionProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[50px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#267FFF]">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Erick Coutinho</h2>

          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                key={`intro-tech-${tech.name}`}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em Contato
              <HiOutlineArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact?.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            width={420}
            height={404}
            src={homeInfo.profilePicture?.url}
            alt="Foto de Perfil do Erick"
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
