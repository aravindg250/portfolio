"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("About");
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <p>
                I am a student at Carnegie Mellon University majoring in
                Electrical and Computer Engineering and minoring in Robotics.
            </p>
            <p>
                I am a software developer with experience in web development and
                programming languages like Python, Java, and TypeScript. I am
                passionate about building software that solves real-world
                problems and enhances user experience.
            </p>
        </motion.section>
    );
}
