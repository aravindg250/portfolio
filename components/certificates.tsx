"use client";
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { certificatesData } from '@/lib/data';
import Certificate from './certificate';



export default function Certificates() {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Certificates");
        }
    }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section id="certificates" ref={ref} className="scroll-mt-28 mb-28">
        <SectionHeading>Certificates</SectionHeading>
        <div>
                {certificatesData.map((certificate, index) => (
                    <React.Fragment key={index}>
                        <Certificate {...certificate} />
                    </React.Fragment>
                ))}
            </div>

    </section>
  )
}
