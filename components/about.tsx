"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";


export default function About() {


  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p>
        I am a student at Carnegie Mellon University majoring in Electrical and
        Computer Engineering.
      </p>
      <p>
        I am a software developer with experience in web development and
        programming languages like Python, JavaScript, and C++. I am passionate
        about building software that solves real-world problems and enhances
        user experience.
      </p>
    </motion.section>
  );
}

