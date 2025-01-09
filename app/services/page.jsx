"use client"

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion';
import Contact from '../contact/page';

const services = [
  {
    num: "01",
    title: "Full Stack Web App Development",
    description: "I Develop and execute SEO strategies that improve organic search results and visibility for key product pages by over 50%. Conducted in-depth competitor analysis to inform content creation,resulting in a 35% increase in market share.",
    href: ""
  },
  {
    num: "02",
    title: "Frontend Development",
    description: "I Conducted a comprehensive audit of Synergy Radiology's website, improved its usability and performance. Identified key areas forimprovement in technical issues, on page optimization andproviding actionable recommendations to enhance overall siteeffectiveness and client engagement.",
    href: ""
  },
  {
    num: "03",
    title: "Backend Development",
    description: "I am a Experienced freelance SEO specialist with a proven record of improving websites visibility and search engine rankings. Successfully drive organic traffic growth and enhance userengagement for clients across various industries.",
    href: ""
  },
  {
    num: "04",
    title: "Full Website SEO",
    description: "I am a Experienced freelance SEO specialist with a proven record of improving websites visibility and search engine rankings. Successfully drive organic traffic growth and enhance userengagement for clients across various industries.",
    href: ""
  },

];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >

      {services.map((services, index)=>{
        return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group ">
          <div className="w-full flex justify-between items-center ">
            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{services.num}</div>
            {/* link */}
            <Link href="/contact" className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
            <BsArrowDownRight className="text-primary text-3xl "/>
            </Link>
          </div>
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{services.title}</h2>
          <p className="text-white/60">{services.description}</p>
          <div className="border-b border-white/20 w-full "></div>
        </div>

      })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services