import React from "react";
import ebayClone from "../public/assets/projects/ebayclone.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ebayclone = () => {
  return (
    <div className='w-full '>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10' />
        <Image
          className='absolute z-1 bg-black/80'
          layout='fill'
          objectFit='cover'
          src={ebayClone}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>eBay Clone</h2>
          <h3>React / Next.js 13 / Tailwind CSS / Prisma / Stripe</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='pt-4'>
            This eBay clone project is a comprehensive e-commerce platform
            developed using React, Next.js 13, Tailwind CSS, Prisma, and Stripe.
            This platform simplifies online transactions with user-friendly
            features and efficient product management powered by Prisma. Stripe
            integration ensures secure payment processing. Explore this project
            to see how these technologies work together to create a seamless
            e-commerce experience.
          </p>
          <button
            className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-200 '
            onClick={() =>
              window.open("https://ebay-clone-gilt.vercel.app/", "_blank")
            }
          >
            Demo
          </button>
          <button
            onClick={() =>
              window.open("https://github.com/danielcrha/ebay-clone", "_blank")
            }
            className='px-8 py-2 mt-4 hover:scale-105 ease-in duration-200 '
          >
            Code
          </button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Next.js 13
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Prisma
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Stripe
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ebayclone;
