import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tkdImg from "@/public/tkd4.jpg";
import wordanalyticsImg from "@/public/wordanalytics.png";
import departureImg from "@/public/departure.jpg";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Certificates",
        hash: "#certificates",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Software Engineer Intern @ ManageBetter",
        location: "Seattle, WA",
        description:
            "Refactored legacy code from JavaScript to TypeScript, enhancing code maintainability and type safety. Integrated local storage functionality to save user data, boosting application efficiency and user experience. Implemented a new end to end testing framework by utilizing Cypress.js, improving test coverage and reliability.",
        icon: {
            src: "/manageBetter.jfif",
            alt: "Amazon logo",
        },
        date: "Jun 2024 - Aug 2024",
    },
    {
        title: "Undergraduate Researcher @ Carnegie Mellon University: College of Engineering",
        location: "Pittsburgh, PA",
        description:
            "Developed an algorithm to assess the accuracy of an automated segmentation tool against manual measurements for hemodynamics in mouse, sheep, and human lungs with pulmonary hypertension using Python, 3D Slicer, and ClearMap.",
        icon: {
            src: "/CMU_College_Of_Engineering.png",
            alt: "Carnegie Mellon University College Of Engineering logo",
        },
        date: "Jun 2024 - Present",
    },
    {
      title: "Energetics/Race Operations System Lead @ Carnegie Mellon Racing",
      location: "Pittsburgh, PA",
      description:
          "Leading a team to build a vehicle alignment rig for 25e to reduce alignment time by over 90%. Designed on a Voltage-Temperature Sense Board for the Low Voltage Battery (24V) for 24e.",
      icon: {
          src: "/CMR.png",
          alt: "Carnegie Mellon Racing logo",
      },
      date: "Aug 2023 - Present",
  },
    {
        title: "Student @ Carnegie Mellon University",
        location: "Pittsburgh, PA",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: {
            src: "/CMU.jfif",
            alt: "Carnegie Mellon University logo",
        },
        date: "Aug 2023 - Present",
    },
    {
        title: "Software Engineer Intern @ Bloomberg LP",
        location: "Princeton, NJ",
        description:
            "Initiated development of a full stack application leveraging React, TypeScript, Node.js, and Express.js to allow users to easily search for Financial Instrument Global Identifiers from Bloomberg’s internal database. Utilized TypeScript, Express.js, and React for server-side development and front-end rendering.",
        icon: {
            src: "/bloomberg.jpg",
            alt: "Bloomberg logo",
        },
        date: "Sep 2022 - Jan 2023",
    },
] as const;

export const projectsData = [
    {
        title: "Lane Departure Warning System",
        description:
            "Developed a real-time Lane Departure Warning System using Raspberry Pi, Coral USB Accelerator, Raspberry Pi V2 Camera Module, and TensorFlow.",
        tags: ["Python", "OpenCV", "TensorFlow", "Raspberry Pi"],
        imageUrl: departureImg,
    },
    {
        title: "Taekwondo Of Morganville Website",
        description:
            "Developed a full stack website for a Taekwondo school employing Django and React, with user authentication and a functional contact form.",
        tags: ["Python", "Django", "React", "Tailwind"],
        imageUrl: tkdImg,
    },
] as const;

export const skillsData = [
    "Java",
    "C",
    "Python",
    "NumPy",
    "Django",
    "OpenCV",
    "TensorFlow",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Express.js",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "SQL",
] as const;
