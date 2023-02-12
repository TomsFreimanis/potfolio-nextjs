import Head from "next/head";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Cards from "./Cards";
import MyVideoComponent from './MyVideoComponent'
import Image from "next/image";
import myimage from '../public/creteme2-removebg-preview.png'
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Projects from "./Projects";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  
  
  

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Toms Freimanis Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className=" text-l md:text-2xl font-burtons dark:text-white">
              Developer{" "}
              <span className="text-teal-600 font-extrabold ">TF</span>
            </h1>
            <ul className="flex items-center">
            
              <li>
                
                < BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode)
                  }}
                
                  className="cursor-pointer text-4xl text-yellow-200"
                />
                
              </li>
            </ul>
          </nav>
          <div className="text-left p-10 py-10 md:text-center">
            <h2 className="text-6xl py-2 text-teal-600 font-medium text-left md:text-6xl md:text-center">
              Toms Freimanis
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-500 md:text-xl max-w-lg mx-auto">
              I design and code beautifull and simple things. I enjoy creating
              things that live on the internet. My interest in web development
              started back in 2021 when I decided to try make a homepage for a
              friend.
            </p>
          </div>
          <div className="text-6xl flex justify-center gap-16 py-3 text-teal-600">
            <a
              href="https://www.linkedin.com/in/toms-freimanis-b96370235/"
              target="_blank"
            >
              {" "}
              <AiFillLinkedin className="hover:text-black dark:hover:text-black " />
            </a>
            <a href="https://www.instagram.com/bomisstudio/" target="_blank">
              {" "}
              <BsInstagram className="hover:text-black dark:hover:text-red-600" />
            </a>
            <a href="https://github.com/TomsFreimanis" target="_blank">
              {" "}
              <BsGithub className="hover:text-black dark:hover:text-gray-500" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-24 overflow-hidden">
            <Image src={myimage}   alt="alt" />
          </div>
        </section>

        <Cards />
      
        <MyVideoComponent/>
        <Projects />
        <footer className="min-h-min">
          <div className="text-l flex justify-center  py-10 text-teal-300 ">
            Designed & Built by Toms Freimanis
          </div>
        </footer>
      </main>
    </div>
  );
}
