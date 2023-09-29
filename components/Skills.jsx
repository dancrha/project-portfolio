import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#176B87]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <h4>Proficient:</h4>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Skill */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/javascript.png'
                  alt='/'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          {/* Skill */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/typescript.svg'
                  alt='/'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
          {/* Skill */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/html.png'
                  alt='/'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/css.png'
                  alt='/'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 py-8'>
            <div className='grid grid-cols-2 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/react.png'
                  alt='/'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 py-8'>
            <div className='grid grid-cols-2 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/next-js.svg'
                  alt='/'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next.js</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 py-8'>
            <div className='grid grid-cols-2 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/mongodb.svg'
                  alt='/'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/tailwind.png'
                  alt='/'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 py-8'>
            <div className='grid grid-cols-2 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/python-5.svg'
                  alt='/'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/java-14.svg'
                  alt='/'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Java</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 py-8'>
            <div className='grid grid-cols-2 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/firebase.png'
                  alt='/'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 py-8'>
            <div className='grid grid-cols-2 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/github1.png'
                  alt='/'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <h4>Some Experience:</h4>
        </div>
        <div className='grid sm:grid-cols-6 sm: md:grid-cols-9  gap-2'>
          {/* Skill */}
          <div className='p-4 py-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 w-auto'>
            <div className='grid grid-cols-2 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/c-1.svg'
                  alt='/'
                  width={32}
                  height={32}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>C</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-3 pt-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 w-auto'>
            <div className='grid grid-cols-2 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/c.svg'
                  alt='/'
                  width={32}
                  height={32}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>C++</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-3 pt-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 w-auto'>
            <div className='grid grid-cols-2 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/php-1.svg'
                  alt='/'
                  width={32}
                  height={32}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PHP</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-3 pt-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 w-auto'>
            <div className='grid grid-cols-2 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/mysql-logo.svg'
                  alt='/'
                  width={32}
                  height={32}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MySQL</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-4 pt-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 w-auto '>
            <div className='grid grid-cols-2 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/node.png'
                  alt='/'
                  width={20}
                  height={32}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>Node.js</h4>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-3 pt-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 w-auto'>
            <div className='grid grid-cols-2 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/prisma-3.svg'
                  alt='/'
                  width={32}
                  height={32}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Prisma</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-3 pt-9 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 w-auto'>
            <div className='grid grid-cols-2 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/stripe-2.svg'
                  alt='/'
                  width={32}
                  height={32}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Stripe</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-3 pt-9 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 w-auto'>
            <div className='grid grid-cols-2 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/docker-4.svg'
                  alt='/'
                  width={32}
                  height={32}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Docker</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-3 pt-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 w-auto'>
            <div className='grid grid-cols-2 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/vitejs.svg'
                  alt='/'
                  width={32}
                  height={32}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Vite</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div className='p-1 pt-8 pr-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 w-auto'>
            <div className='grid grid-cols-2 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/android-4.svg'
                  alt='/'
                  width={32}
                  height={32}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Android</h3>
              </div>
            </div>
          </div>

          {/* Skill */}
          <div
            className='p-3 pt-7
           shadow-xl rounded-xl hover:scale-105 ease-in duration-300 w-auto'
          >
            <div className='grid grid-cols-2 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='/../assets/skills/ios-2.svg'
                  alt='/'
                  width={32}
                  height={32}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>iOS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
