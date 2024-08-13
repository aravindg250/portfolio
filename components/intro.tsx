"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.1,
            }}
          >
            <Image
              src="/pfp.jpg"
              alt="Aravind Profile Pictore"
              width="512"
              height="512"
              quality="95"
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 20,
              duration: 1.5,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          Hey, I'm Aravind Gunasekaran! <br></br>
        </span>{" "}
        I'm a student at{" "}
        <span className="font-bold">Carnegie Mellon University</span> majoring
        in{" "}
        <span className="font-bold">Electrical and Computer Engineering</span>{" "}
        and minoring in <span className="font-bold">Robotics</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all cursor-pointer"
        >
          Contact Me
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        {/* <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer border border-black/10"
          href="/Resume.pdf"
          download={true}
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a> */}

        <a
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer border border-black/10"
          href="https://linkedin.com/in/aravind-gunasekaran"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 flex text-gray-700 items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer border border-black/10"
          href="https://github.com/aravindg250"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        
      </motion.div>
    </section>
  );
}
