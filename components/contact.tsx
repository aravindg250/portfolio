"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import SectionHeading from "./section-heading";

export default function Contact() {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Contact");
        }
    }, [inView, setActiveSection, timeOfLastClick]);
    return (
        <section ref={ref} id="contact">
            <SectionHeading>Contact</SectionHeading>
        </section>
    );
}
