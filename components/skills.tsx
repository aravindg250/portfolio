"use client";
import React, { useEffect } from "react";
import SectionHeader from "./section-heading";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Skills");
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 "
        >
            <SectionHeader>Skills</SectionHeader>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
