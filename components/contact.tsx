"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import SectionHeading from "./section-heading";

export default function Contact() {
    const { ref, inView } = useInView({ threshold: 0.7 });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Contact");
        }
    }, [inView, setActiveSection, timeOfLastClick]);
    return (
        <section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
            <SectionHeading>Contact</SectionHeading>
            <p>
                Please contact me directly at{" "}
                <a className="underline" href="mailto:agunasek@andrew.cmu.edu">
                    agunasek@andrew.cmu.edu
                </a>{" "}
                or through this form.
            </p>
            <form action="" className="flex flex-col mt-10">
                <input type="email"className="h-14 rounded-lg border border-black/10"></input>
                <textarea name="" id="" className=""></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
