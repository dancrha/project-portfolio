// import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#176B87]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#176B87] to-[#ff585f]'>
            {/* <Image src={} alt="/"></Image> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
