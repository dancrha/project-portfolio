import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <div className='uppercase text-sm tracking-widest text-gray-600'>
            <TypewriterComponent
              options={{
                strings: [
                  "Software is my craft, quality is my standard.",
                  "Let's collaborate and make some awesome apps.",
                  "Developing innovative and elegant software.",
                  "I can turn your vision into reality.",
                  "I love coding and solving problems.",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 1,
              }}
            />
          </div>
          <h1 className='py-4 text-gray-700 '>
            Hi, I&apos;m{" "}
            <span className='bg-gradient-to-r from-[#176B87] to-[#ff585f] inline-block text-transparent bg-clip-text'>
              Daniel Crha
            </span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full-Stack Software Engineer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I&apos;m a recent Laurier graduate with a passion for Web
            Development and AI. I love creating stunning and responsive web
            apps. I am proficient in React, but I am always learning new
            technologies.
          </p>
          <div className='flex max-w-[330px] m-auto py-4 items-center justify-between'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
