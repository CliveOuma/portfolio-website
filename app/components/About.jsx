"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AOS from "aos";
import "aos/dist/aos.css";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Development</li>
        <li>Backend Integration</li>
        <li>Passionate about Data Science, AI & ML</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Machakos University</li>
        <li>Bsc in Information Technology</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
    });
  }, []);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about image" />
        <div className="mt-4 md:mt-0 pt-20 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg leading-relaxed text-gray-300 mt-4">
            Hello! I am a passionate Frontend Developer with a strong foundation in creating scalable and high-performance web applications that deliver engaging and seamless user experiences. With a deep understanding of modern web technologies, I specialize in:
          </p>
          <ul className="list-disc list-inside mt-2 mb-4 text-gray-300">
            <li>Frontend Technologies: HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS.</li>
          </ul>
          <p className="text-base lg:text-lg leading-relaxed text-gray-300 mt-4">
            My approach to development goes beyond just coding—I am driven to build user-centric, responsive designs and interactive interfaces that engage users and provide smooth, dynamic experiences.
          </p>
          <p className="text-base lg:text-lg leading-relaxed text-gray-300 mt-4">
            As a Full Stack Developer, I am also highly proficient in Backend Integration, where I ensure seamless communication between the frontend and backend systems. I work with:
          </p>
          <ul className="list-disc list-inside mt-2 mb-4 text-gray-300">
            <li>Backend Technologies: Node.js and Express.js</li>
            <li>Databases: Relational (MySQL) and Non-Relational (MongoDB)</li>
          </ul>
          <p className="text-base lg:text-lg leading-relaxed text-gray-300 mt-4">
            In my pursuit of becoming a Full Stack Developer, I am continuously learning and expanding my skills to include Python for advanced backend development, which will further enhance my ability to work with more complex applications and systems.
          </p>
          <p className="text-base lg:text-lg leading-relaxed text-gray-300 mt-4">
            One of my greatest passions is exploring the exciting realms of Generative AI and Machine Learning. I am actively diving into these fields to integrate cutting-edge AI solutions into practical, real-world applications. My goal is to leverage data science and machine learning techniques to build intelligent, data-driven solutions that not only solve complex problems but also transform industries.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
