import React from "react";
import { motion } from "framer-motion";
import food from "../public/foodproject.jpg";
import nba from "../public/projectnba.jpg";
import weather from "../public/weatherapp.jpg";
import riga from "../public/autoskolariga.jpg";
import meme from "../public/meme.jpg";
import passwordGenerator from "../public/random password generator.jpg";
import maisinspele from "../public/maisinspele.jpg";

import { BsGithub, BsCodeSquare } from "react-icons/bs";
import Image from "next/image";
import devtf from "../public/devtf.jpg";
const Projects = () => {
  const imageAnimateLeft = {
    offscreen: { x: 0, opacity: 0 },
    onscreen: { x: 0, opacity: 1 },
    transition: { duration: 2, type: "spring", bounce: 0.5 },
  };
  const imageAnimateRigth = {
    offscreenRigth: { x: 0, opacity: 0 },
    onscreen: { x: 0, opacity: 1 },
    transition: { type: "spring", bounce: 0.5 },
  };

  return (
    <section>
      <div className="flex flex-col justify-center gap-10 py-10 lg:flex-row lg:flex-wrap">
        <h3 className="text-5xl py-1  dark:text-white">Portfolio</h3>
      </div>
      <div className="flex flex-col gap-20 py-10 lg:flex-row lg:flex-wrap">
        <motion.div
          className="basis-1/3 flex-1"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.7 }}
          variants={imageAnimateLeft}
        >
          <h1 className="mb-6 text-center text-teal-600 text-2xl">
            Food recipes app
          </h1>
          <Image
            src={food}
            className="rounded-lg object-cover shadow-md shadow-teal-600"
            width={"100%"}
            height={"100%"}
            alt="img"
          />
          <div className="text-4xl flex justify-center gap-16 mt-4 py-2 text-teal-600  cursor-pointer ">
            <a
              href="https://github.com/TomsFreimanis/project13"
              target="_blank"
            >
              <BsGithub className="hover:text-black dark:hover:text-white" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={"offscreenRigth"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.7 }}
          variants={imageAnimateRigth}
          className="basis-1/3 flex-1"
        >
          <h1 className="mb-6 text-center text-teal-600 text-2xl">
            Weather app
          </h1>
          <Image
            src={weather}
            className="rounded-lg object-cover shadow-md shadow-teal-600"
            width={"100%"}
            height={"100%"}
            alt="img"
          />
          <div className="text-4xl flex justify-center gap-16 mt-4 py-2 text-teal-600  cursor-pointer ">
            <a href="https://github.com/TomsFreimanis/weather" target="_blank">
              <BsGithub className="hover:text-black dark:hover:text-white" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.7 }}
          variants={imageAnimateLeft}
          className="basis-1/3 flex-1"
        >
          <h1 className="mb-6 text-center text-teal-600 text-2xl">NBA app</h1>
          <Image
            src={nba}
            className="rounded-lg object-cover shadow-md shadow-teal-600"
            width={"100%"}
            height={"100%"}
            alt="alt"
          />
          <div className="text-4xl flex justify-center gap-16 mt-4 py-2 text-teal-600  cursor-pointer ">
            <a href="https://github.com/TomsFreimanis/nba" target="_blank">
              <BsGithub className="hover:text-black dark:hover:text-white" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={"offscreenRigth"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.7 }}
          variants={imageAnimateRigth}
          className="basis-1/3 flex-1"
        >
          {" "}
          <h1 className="mb-6 text-center text-teal-600 text-2xl">
            Rigasautoskola.lv
          </h1>
          <Image
            src={riga}
            className="rounded-lg object-cover shadow-md shadow-teal-600"
            width={"100%"}
            height={"100%"}
            alt="alt"
          />
          <div className="text-4xl flex justify-center gap-16 mt-4 py-2 text-teal-600  cursor-pointer ">
            <a href="https://rigasautoskola.lv/" target="_blank">
              <BsCodeSquare className="hover:text-black dark:hover:text-white" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.7 }}
          variants={imageAnimateLeft}
          className="basis-1/3 flex-1"
        >
          <h1 className="mb-6 text-center text-teal-600 text-2xl">Meme app</h1>
          <Image
            src={meme}
            className="rounded-lg object-cover shadow-md shadow-teal-600"
            width={"100%"}
            height={"100%"}
            alt="alt"
          />
          <div className="text-4xl flex justify-center gap-16 mt-4 py-2 text-teal-600  cursor-pointer ">
            <a
              href="https://github.com/TomsFreimanis/memegenerator"
              target="_blank"
            >
              <BsGithub className="hover:text-black dark:hover:text-white" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={"offscreenRigth"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.7 }}
          variants={imageAnimateRigth}
          className="basis-1/3 flex-1"
        >
          <h1 className="mb-6 text-center text-teal-500 text-2xl">
            Developertf.lv
          </h1>
          <Image
            src={devtf}
            className="rounded-lg object-cover shadow-md shadow-teal-600"
            width={"100%"}
            height={"100%"}
            alt="alt"
          />
          <div className="text-4xl flex justify-center gap-16 mt-4 py-2 text-teal-600  cursor-pointer ">
            <a href="https://github.com/TomsFreimanis/potfolio-nextjs/tree/master/react-portfolio-tail">
              <BsGithub className="hover:text-black dark:hover:text-white" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.7 }}
          variants={imageAnimateLeft}
          className="basis-1/3 flex-1"
        >
          <h1 className="mb-6 text-center text-teal-600 text-2xl">
            Random password generator
          </h1>
          <Image
            src={passwordGenerator}
            className="rounded-lg object-cover shadow-md shadow-teal-600"
            width={"100%"}
            height={"100%"}
            alt="alt"
          />
          <div className="text-4xl flex justify-center gap-16 mt-4 py-2 text-teal-600  cursor-pointer ">
            <a
              href="https://github.com/TomsFreimanis/memegenerator"
              target="_blank"
            >
              <BsGithub className="hover:text-black dark:hover:text-white" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={"offscreenRigth"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.7 }}
          variants={imageAnimateRigth}
          className="basis-1/3 flex-1"
        >
          <h1 className="mb-6 text-center text-teal-600 text-2xl">
            Maisinspele.lv
          </h1>
          <Image
            src={maisinspele}
            className="rounded-lg object-cover shadow-md shadow-teal-600"
            width={"100%"}
            height={"100%"}
            alt="alt"
          />
          <div className="text-4xl flex justify-center gap-16 mt-4 py-2 text-teal-600  cursor-pointer ">
            <a href="https://maisinspele.lv/">
              <BsCodeSquare className="hover:text-black dark:hover:text-white" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
