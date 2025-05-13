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
        <li>Backend Development</li>
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
          <p className="text-gray-300 mt-4">
            Hello! I am a Software Engineer with a strong foundation in building scalable and high-performance applications. I specialize in developing seamless, engaging user experiences and robust backend systems, using a wide range of modern technologies.
          </p>

          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Frontend Technologies: HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Angular, Tailwind CSS</li>
          </ul>

          <p className="text-gray-300 mt-4">
            My approach goes beyond writing code I'm committed to building user-centric, responsive, and interactive applications that provide smooth and intuitive experiences.
          </p>

          <p className="text-gray-300 mt-4">
            On the backend, I ensure reliable and efficient system architecture and integration. I have experience working with:
          </p>

          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Backend Technologies: Node.js, Express.js, Java with Spring Boot, C# with .NET Framework</li>
            <li>Databases: MySQL (Relational), MongoDB (Non-Relational)</li>
          </ul>

          <p className="text-gray-300 mt-4">
            I'm also actively exploring Python for Data Analysis and advanced backend development, aiming to deepen my problem-solving capabilities and work with more complex systems.
          </p>

          <p className="text-gray-300 mt-4">
            One of my greatest passions lies in the fields of Generative AI and Machine Learning. I'm constantly learning how to apply cutting-edge AI technologies to solve real-world problems and build intelligent, data-driven solutions that create meaningful impact.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
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
