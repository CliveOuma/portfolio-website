"use client";
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectsData = [
  {
    id: 1,
    title: "Sunglasses Website",
    description: "A responsive website to showcase sunglasses a customer can purchase.",
    image: "/images/projects/sunglasses.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/CliveOuma/sun-glasses",
    previewUrl: "https://get-sun-glasses.netlify.app/",
  },
  {
    id: 2,
    title: "Ecommerce Application",
    description: "An application that enables users to view and purchase products displayed.",
    image: "/images/projects/ebuy.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/CliveOuma/Ecommerce-Application",
    previewUrl: "https://ecommerce-application-ebuy.vercel.app",
  },
  {
    id: 3,
    title: "Student Mangement System",
    description: "A solution for lecturers and students to access their information securely.",
    image: "/images/projects/std.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/CliveOuma/student-management-system",
    previewUrl: "https://the-student-management-system.vercel.app/",
  },
  {
    id: 4,
    title: "Safety Management System",
    description: "A solution for recording near-miss incidents at Tianlong company.",
    image: "/images/projects/tianlong-safety.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/CliveOuma/safety-management-system",
    previewUrl: "https://safety-management-system.vercel.app/",
  },
  {
    id: 5,
    title: "Tianlong Landing Page",
    description: "A simple, responsive landing page to showcase gas cookers & their features.",
    image: "/images/projects/gas-catalogue.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/CliveOuma/Tianlong-catalogue",
    previewUrl: "https://tianlong-catalogue.vercel.app/",
  },
];

const Project = () => {
  const [tag, setTag] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(3); // Initial number of projects to show
  const [isExpanded, setIsExpanded] = useState(false); // Track if projects are expanded or not

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: true,
    });
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setVisibleProjects(3); // Reset the number of visible projects when the tag changes
    setIsExpanded(false);  // Reset to default when tag changes
  };

  const handleToggleProjects = () => {
    if (isExpanded) {
      setVisibleProjects(3); // Collapse the list to 3 projects
    } else {
      setVisibleProjects(filteredProjects.length); // Show all projects
    }
    setIsExpanded(!isExpanded); // Toggle the state
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section className="project my-8 md:my-12 pt-20 gap-2" id="project">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Works
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>      
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Frontend" isSelected={tag === "Frontend"} />
        <ProjectTag onClick={handleTagChange} name="FullStack" isSelected={tag === "FullStack"} />
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 md:px-10'>
        {filteredProjects.slice(0, visibleProjects).map((project) => (
          <div data-aos="zoom-in-up" key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </div>
        ))}
      </div>

      {filteredProjects.length > 3 && (
        <div className="flex justify-center mt-8">
          <button onClick={handleToggleProjects}
          className="py-2 px-4 sm:py-3 sm:px-6 sm:w-auto w-full rounded-full bg-gradient-to-br
           from-orange-500 via-red-600 to-blue-500 hover:bg-slate-200 text-white transition-all duration-300
           ease-in-out transform hover:scale-105">
            {isExpanded ? "Show Less" : "Show More"}
            </button>
        </div>
      )}
    </section>
  );
};

export default Project;
