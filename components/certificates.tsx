"use client";
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Certificates() {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Skills");
        }
    }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section id="certificates" ref={ref}>
        <SectionHeading>Certificates</SectionHeading>
    </section>
  )
}
