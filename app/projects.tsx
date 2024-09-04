import Image from 'next/image';

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <Image src="/project1.jpg" alt="Project 1" width={300} height={200} />
      <p>Project 1 Description</p>
    </div>
  );
};

export default Projects;
