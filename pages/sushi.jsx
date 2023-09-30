import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import sushiRestaurant from "../public/assets/projects/sushi.png";

const sushi = () => {
  return (
    <div className='w-full '>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10' />
        <Image
          className='absolute z-1 bg-black/80'
          layout='fill'
          objectFit='cover'
          src={sushiRestaurant}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Sushi Restaurant Website (Frontend Project)</h2>
          <h3>Javascript / HTML / CSS</h3>
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
              window.open(
                "https://sushi-restaurant-website.vercel.app/",
                "_blank"
              )
            }
          >
            Demo
          </button>
          <button
            onClick={() =>
              window.open(
                "https://github.com/danielcrha/sushi-restaurant-website",
                "_blank"
              )
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
                Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                HTML
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                CSS
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

export default sushi;
