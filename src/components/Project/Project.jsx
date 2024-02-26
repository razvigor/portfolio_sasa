import PropTypes from 'prop-types';

const Project = ({ name, tags, image, duration, aos }) => {
  return (
    <>
      <div data-aos={aos} className='col-span-6  md:col-span-3 lg:col-span-2'>
        <div className='relative w-full h-[260px] group overflow-hidden'>
          <img
            src={image}
            alt='project_image'
            loading='lazy'
            className={`w-full h-auto absolute left-0 object-cover rounded-2xl group-hover:-translate-y-full transition-all ${duration} ease-in-out`}
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          {/* <p className='mt-2 text-secondary text-[14px]'>{description}</p> */}
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
Project.propTypes = {
  name: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.string,
  duration: PropTypes.number,
  aos: PropTypes.string,
};
export default Project;
