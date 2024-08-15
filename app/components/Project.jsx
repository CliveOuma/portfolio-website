"use client"
import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    id: 1,
    title: "Sunglasses Website",
    description: "A responsive website to showcase sun-glasses a customer can purchase ",
    image: "/images/projects/sun-glasses.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CliveOuma/sun-glasses",
    previewUrl: "https://get-sun-glasses.netlify.app/",
  },
  {
    id: 2,
    title: "Ecommerce Application",
    description: "An application that enables users to view and purchase products displayed",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CliveOuma/Ecommerce-system",
    previewUrl: "/",
  },
    {
      id: 3,
      title: "Landing Page",
      description: "A simple and responsive landing page to showcase gas cookers and their features",
      image: "/images/projects/catalogue.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/CliveOuma/Tianlong-catalogue",
      previewUrl: "https://tianlong-catalogue.vercel.app/",
    },
    {
      id: 4,
      title: "Safety Management System",
      description: "A solution for recording and managing near-miss incidents",
      image: "/images/projects/safety.png",
      tag: ["All"],
      gitUrl: "https://github.com/CliveOuma/safety-management-system",
      previewUrl: "https://safety-management-system.vercel.app/",
    },
    {
      id: 5,
      title: "Bike Riding",
      description: "A Website to help user access bikes and educate the essence of cyclying.",
      image: "/images/projects/cycling.png",
      tag: ["All","web"],
      gitUrl: "https://github.com/CliveOuma/bike-riding",
      previewUrl: "https://bicycle-riding.vercel.app/",
    },
]  

const Project = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );
  return (
    <>
    <section className="project my-12 md:my-12 pt-20  gap-2" id="project">
    <h2 className='text-center text-4xl mb-2 font-bold mt-4 text-white'>My Works</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
    <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
    <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
    </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {
            filteredProjects.map((project) => (
                <ProjectCard key={project.id}
                title={project.title}
                description= {project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                />
            ))
        }
    </div>
    </section>
    </>
  )
}

export default Project