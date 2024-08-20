"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Experience() {
    const { ref, inView } = useInView({ threshold: 0.1 });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Experience");
        }
    }, [inView, setActiveSection, timeOfLastClick]);
    return (
        <section
            ref={ref}
            id="experience"
            className="scroll-mt-28 mb-28 sm:mb-40"
        >
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={true}
                            contentStyle={{
                                background: "#f3f4f6",
                                boxShadow: "none",
                                border: "1px solid #e5e7eb",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid  #9ca3af",
                            }}
                            date={item.date}
                            icon={
                                <Image
                                    src={(item.icon as { src: string }).src}
                                    alt="Icon"
                                    width="100"
                                    height="100"
                                />
                            }
                            iconStyle={{
                                boxShadow: "none",
                                background: "#fff",
                                fontSize: "1.5rem",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <h3 className="font-semibold capitalize">
                                {item.title}
                            </h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            {item.description.split("\n").map((line, index) => (
                                <p
                                    className="!mt-1 !font-normal text-gray-700"
                                    key={index}
                                >
                                    {line}
                                </p>
                            ))}
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}
