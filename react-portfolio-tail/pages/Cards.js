import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiComputerFill } from "react-icons/ri";
import { DiGoogleAnalytics, DiWindows } from "react-icons/di";
import { GiProgression } from "react-icons/gi";




const Cards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  
  return (
    
    <div className="lg:flex justify-center gap-10 ">
      <section className="flex-1 text-center align-center mb-20 ">
        
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="m-0  px-3 "
        >
          <motion.h2 layout="position ">
            {" "}
            <div className="mb-6">
              <div className="text-lg lg:text-3xl font-medium pt-8 pb-2 dark:text-white">
                What I am{" "}
                <span className="text-teal-600 font-bold">looking for</span>
              </div>
              <div className="text-6xl flex justify-center gap-16 py-3 text-teal-300">
                
                <DiGoogleAnalytics   alt="alt"  className="cursor-pointer hover:text-teal-100" />
              
              </div>
            </div>
          </motion.h2>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="text-center  shadow-md shadow-teal-600 p-10 rounded-xl my-10 dark:bg-white">
                <div className="py-2 lg:text-xl  dark:text-black">
                  I’m now looking for a{" "}
                  <span className="text-teal-600 font-bold">junior dev</span>{" "}
                  position to finally kick start my{" "}
                  <span className="text-teal-600 font-bold"> career</span> and
                  learn among professionals.
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onClick={() => setIsOpen3(!isOpen3)}
          className="m-0  px-3  "
        >
          <motion.h2 layout="position">
            {" "}
            <div className="mt-4">
              <div className="text-lg  lg:text-3xl  font-medium pt-8 pb-2 dark:text-white">
                When I <span className="text-teal-600 font-bold"> started</span>
              </div>
              <div className="text-6xl flex justify-center gap-16 py-3 text-teal-300 cursor-pointer">
                <RiComputerFill className="hover:text-teal-100" />
              </div>
            </div>
          </motion.h2>

          {isOpen3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="text-center  shadow-md shadow-teal-600 p-10 rounded-xl my-10 dark:bg-white">
                <div className="py-2 dark:text-black lg:text-xl">
                  In the last two years, I’ve cultivated my passion for{" "}
                  <span className="text-teal-600 font-bold">coding </span>
                  by studying the{" "}
                  <span className="text-teal-600 font-bold">IT field.</span>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onClick={() => setIsOpen4(!isOpen4)}
          className="m-0  px-3  "
        >
          <motion.h2 layout="position">
            {" "}
            <div className="mb-6">
              <div className="text-lg  lg:text-3xl font-medium pt-8 pb-2 dark:text-white">
                What have I been{" "}
                <span className="text-teal-600 "> working on lately? </span>
              </div>
            </div>
            <div className="text-6xl flex justify-center gap-16 py-3 text-teal-300 cursor-pointer">
              <GiProgression className="hover:text-teal-100" />
            </div>
          </motion.h2>

          {isOpen4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="text-center  shadow-md shadow-teal-600 p-10 rounded-xl my-10 dark:bg-white">
                <div className="py-2 dark:text-black lg:text-xl">
                  Lately I've been working with{" "}
                  <span className="text-teal-600 font-bold">Reactjs</span> and{" "}
                  <span className="text-teal-600 font-bold">TailwindCSS</span>,
                  which I've been loving!
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onClick={() => setIsOpen2(!isOpen2)}
          className="m-0  px-3  "
        >
          <motion.h2 layout="position">
            {" "}
            <div className="mb-6">
              <div className="text-lg  lg:text-3xl font-medium pt-8 pb-2 dark:text-white">
                What{" "}
                <span className="text-teal-600 ">programming languages </span>
                and <span className="text-teal-600 font-bold">tools</span> I
                have used so far
              </div>
            </div>
            <div className="text-6xl flex justify-center gap-16 py-3 text-teal-300 cursor-pointer">
              <DiWindows className="hover:text-teal-100" />
            </div>
          </motion.h2>

          {isOpen2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="text-center  shadow-md shadow-teal-600 p-10 rounded-xl my-10 dark:bg-white">
                <div className="py-2 dark:text-black lg:text-xl">
                  <span className="text-teal-400 font-bold">HTML, </span>
                  <span className="text-teal-400 font-bold"> CSS, </span>
                  <span className="text-teal-500 font-bold">Github, VSC, </span>
                  <span className="text-teal-500 font-bold">PHP, Bootstrap,</span>
                  <span className="text-teal-600 font-bold"> Javascript,</span>
                  <span className="text-teal-600 font-bold">React, Tailwind</span>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Cards;
