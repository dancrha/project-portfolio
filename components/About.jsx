import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#176B87]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I am an ambitious, hard working programmer who has had a love for
            technology since a young age. My journey into the world of
            programming began during high school when I enrolled in a computer
            science course, and from the very start, I found myself captivated
            by the possibilities it offered. My fascination with the tech world
            was further fueled by groundbreaking innovations, such as electric,
            self-driving cars. I always knew I wanted to have a career in tech,
            but once I tried programming, it was like discovering my true
            passion. Programming puts me into a flow state that only video games
            could ever induce, which is why I love it so much.
          </p>
          <p className='py-2 text-gray-600'>
            I just recently graduated from Wilfrid Laurier University with a
            Bachelors Degree in Computer Science. Since then I have been working
            on personal projects to learn new technologies and create an
            impressive portfolio in hopes of landing my first software
            engineering job. I&apos;ve discovered my areas of specialization in
            software engineering, focusing on web development and artificial
            intelligence. I thoroughly enjoy the process of creating a
            full-stack web app from start to finish, there&apos;s nothing like
            seeing your hard work come to life. I relish the challenge and savor
            the rewards.
          </p>
          <p className='py-2 text-gray-600'>
            The recent breakthroughs in the field of artificial intelligence
            have sparked a profound interest within me. This fascination has not
            only deepened my understanding of AI but has also propelled me
            toward achieving a high level of proficiency in effectively
            harnessing the power of artificial intelligence. Through dedicated
            study and practical application, I have acquired the knowledge and
            skills required to leverage AI technologies in a manner that brings
            about meaningful and impactful results.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            src='/../assets/about-me-pic.jpg'
            alt='/'
            width={350}
            height={50}
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
