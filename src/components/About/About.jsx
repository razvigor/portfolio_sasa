import { FaCss3 } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';
import { styles } from '../../styles';
import { Text } from '../../context/Language';

const About = () => {
  return (
    <div
      id='about'
      className='h-auto lg:h-screen flex flex-col lg:flex-row container px-4 lg:px-0 mx-auto justify-center items-center'
    >
      <div
        data-aos='fade-left'
        className='flex-1 flex items-center justify-center h-full relative my-24'
      >
        <div className='cube'>
          <div className='box box-1'>
            <FaFigma />
          </div>

          <div className='box box-2'>
            <FaHtml5 />
          </div>

          <div className='box box-3'>
            <FaCss3 />
          </div>

          <div className='box box-4'>
            <FaReact />
          </div>

          <div className='box box-5'>
            <FaJsSquare />
          </div>

          <div className='box box-6'>
            <FaGitAlt />
          </div>
        </div>
      </div>

      <div data-aos='fade-right' className='flex-1'>
        <p className={styles.sectionSubText}>
          <Text tid='about-introduction' />
        </p>
        <h2 className={styles.sectionHeadText}>
          <Text tid='about-overview' />
        </h2>
        <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          <Text tid='aboute-text' />
        </p>
      </div>
    </div>
  );
};

export default About;
