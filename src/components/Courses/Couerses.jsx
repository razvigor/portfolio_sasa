import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { Text } from '../../context/Language';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../../styles';
import { courses } from '../../data';
import StarWrapper from '../../hoc/SectionWrapper';

import CourseCard from './CourseCard';

const Courses = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          <Text tid='courses-text' />
        </p>
        <h2 className={styles.sectionHeadText}>
          <Text tid='courses-title' />
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {courses.map((course, index) => (
            <CourseCard key={`course-${index}`} course={course} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default StarWrapper(Courses, 'courses');
