import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#176B87]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='/../assets/contact.jpg'
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Daniel Crha</h2>
                <p>Software Developer</p>
                <p className='py-4'>
                  Looking for my first software development job. Open to
                  full-time positions, internships, and new grad programs.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect with me</p>
                <di className='flex items-center justify-between py-4'>
                  <div
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/danielcrha/",
                        "_blank"
                      )
                    }
                    className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                  >
                    <FaLinkedinIn />
                  </div>
                  <div
                    onClick={() =>
                      window.open("https://github.com/danielcrha", "_blank")
                    }
                    className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                  >
                    <FaGithub />
                  </div>
                  <div
                    onClick={() => {
                      window.location.href = "mailto:crha.daniel@gmail.com";
                    }}
                    className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                  <a
                    href='/../assets/resume.pdf'
                    download='Daniel Crha Resume.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </di>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      type='text'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone number
                    </label>
                    <input
                      type='text'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    type='email'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    type='email'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-white mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
              <HiOutlineChevronDoubleUp size={30} className='text-[#ff585f]' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
