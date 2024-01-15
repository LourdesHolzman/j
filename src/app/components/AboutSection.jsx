'use client';
import React, {useTransition, useState, startTransition} from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>JavaScript</li>
        <li>ReactJs</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Framer Motion</li>
      </ul>
    )
  },
  {
    title: "Educación",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>        
        <li>Udemy</li>
        <li>Platzi</li>
        <li>Coderhouse</li>
        <li>Universidad Nacional del Sur</li>
      </ul>
    )
  },
  {
    title: "Certificados",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2'>
        <li>Frontend Developer - Coderhouse.</li>
        <li>ReactJs - Coderhouse.</li>
        <li>JavaScript - Coderhouse.</li>
        <li>Desarrollo Web - Coderhouse.</li>
        <li>Técnica Audiovisual - Universidad Nacional del Sur.</li>
      </ul>
    )
  }
]


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
      });
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>Sobre mi</h2>
          <p className='text-base lg:text-lg '>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Excepturi tempore nobis im
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton 
            selecTab={() => handleTabChange("skills")} 
            active={tab === "skills"}>
              {""}
              Habilidades {""}
            </TabButton>
            <TabButton 
            selecTab={() => handleTabChange("education")} 
            active={tab === "education"}>
              {""}
              Educación {""}
            </TabButton>
            <TabButton 
            selecTab={() => handleTabChange("certifications")} 
            active={tab === "certifications"}>
              {""}
              Certificados {""}
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;