import Project from '../Project/Project.jsx';
import { projects } from '../../data.js';
import { styles } from '../../styles.js';
import { Text } from '../../context/Language.jsx';

const ProjectList = () => {
  return (
    <div
      id='work'
      className='py-24 flex flex-col items-center justify-center text-center container mx-auto'
    >
      <div className='w-full  px-4 lg:px-0'>
        <p data-aos='fade-right' className={`${styles.sectionSubText} `}>
          <Text tid='work-title' />
        </p>
        <h2 data-aos='fade-left' className={`${styles.sectionHeadText}`}>
          <Text tid='work-text' />
        </h2>
      </div>

      <div className='mt-24 grid grid-cols-6 gap-7 w-full px-4 lg:px-0'>
        {projects.map((project) => (
          <Project
            key={project.id}
            aos='fade-up'
            image={project.image}
            duration={project.duration}
            name={project.name}
            tags={project.tags}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
