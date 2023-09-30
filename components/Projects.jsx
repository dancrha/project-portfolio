// import Image from "next/image";
import React from "react";
import ProjectItem from "./ProjectItem";
import MangoAI from "../public/assets/projects/mangoaisaas.png";
import ebayClone from "../public/assets/projects/ebayclone.png";
import netflixClone from "../public/assets/projects/netflixclone.png";
import sushiRestaurant from "../public/assets/projects/sushi.png";

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#176B87]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Mango AI SAAS'
            backgroundImg={MangoAI}
            projectUrl='/mangoaisaas'
            desc='Javascript, Typescript, HTML, CSS, React, Next.js'
          />
          <ProjectItem
            title='Netflix Clone'
            backgroundImg={netflixClone}
            projectUrl='/netflixclone'
            desc='Javascript, Typescript, HTML, CSS, React, Next.js'
          />
          <ProjectItem
            title='Ebay Clone'
            backgroundImg={ebayClone}
            projectUrl='/ebayclone'
            desc='Javascript, HTML, CSS, Next.js'
          />
          <ProjectItem
            title='Sushi Restaurant Website (Frontend Project)'
            backgroundImg={sushiRestaurant}
            projectUrl='/sushi'
            desc='Javascript, HTML, CSS, React'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
