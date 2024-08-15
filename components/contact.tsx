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
            <div>
                <div className="mb-3 sm:mb-8 last:mb-0 flex flex-row">
                    <a href="mailto:agunasek@andrew.cmu.edu"></a>
                    <div className="bg-gray-100 max-w-[48rem] border-black/5 rounded-lg overflow-auto sm:pr-8 relative hover:bg-gray-200 transition">
                        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[100%] flex flex-col">
                            <h3 className="text-2xl font-semibold">Email</h3>
                            <p className="mt-2 leading-relaxed text-gray-700 text-[15px]"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
