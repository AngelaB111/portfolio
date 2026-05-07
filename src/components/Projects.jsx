import React, { useState } from "react";

export function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "Project 1",
      description: "Description of project 1",
      languages: ["JavaScript", "React"],
      features: ["Feature 1", "Feature 2"],
      preview: "preview of project 1",
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      languages: ["Node.js", "Express"],
      features: ["Feature A", "Feature B"],
      preview: "preview of project 2",
    },
  ]);
const handleAddProject = () => {
    const newProject = {
      title: "Project 3",
      description: "Description of project 3",
      languages: ["JavaScript", "React"], // Fixed the spelling of "languages"
      features: ["Feature 1", "Feature 2"],
      preview: "preview of project 1 ",
    };

    setProjects([...projects, newProject]);
  };


  return (
    <>
      <h1>Projects</h1>;
      <button onClick={handleAddProject}>Add Project 3</button>
      <div>
        {projects.map((project) => (
          <div>
            <p>{project.title}, </p>
            <p>{project.description}</p>
          </div>
        ))}
        ;
      </div>
    </>
  );
}
//[title: 'Project 1', description: 'Description of project 1', langages: ['JavaScript', 'React'], features: ['Feature 1', 'Feature 2'], preview: 'preview of project 1 ']
