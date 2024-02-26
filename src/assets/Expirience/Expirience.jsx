import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { Text } from '../../context/Language';
import ExperienceCard from './ExpirienceCard';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../../styles';
import { experiences } from '../../data';
import StarWrapper from '../../hoc/SectionWrapper';
import { textVariant } from '../../utils/motion';

const Expirience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          <Text tid='experiences-text' />
        </p>
        <h2 className={styles.sectionHeadText}>
          <Text tid='experiences-title' />
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default StarWrapper(Expirience, 'experience');
