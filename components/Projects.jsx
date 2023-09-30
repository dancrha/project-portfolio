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
          />
          <ProjectItem
            title='Ebay Clone'
            backgroundImg={ebayClone}
            projectUrl='/ebayclone'
          />
          <ProjectItem
            title='Mango AI SAAS'
            backgroundImg={netflixClone}
            projectUrl='/netflixclone'
          />
          <ProjectItem
            title='Mango AI SAAS'
            backgroundImg={sushiRestaurant}
            projectUrl='/sushi'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
