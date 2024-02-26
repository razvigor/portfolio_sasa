import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import PropTypes from 'prop-types';
import { Text } from '../../context/Language';

const CourseCard = ({ course }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={course.date}
      iconStyle={{ background: course.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={course.icon}
            alt={course.title}
            className='w-[80%] h-[80%] rounded-full object-contain'
            loading='lazy'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{course.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {course.level}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        <Text tid={course.point} />
      </ul>
    </VerticalTimelineElement>
  );
};
CourseCard.propTypes = {
  course: PropTypes.object,
};
export default CourseCard;
