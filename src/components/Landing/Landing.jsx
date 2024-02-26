import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Logo from '../Logo/Logo';
import Mouse from '../UI/Mouse';
import { Link } from 'react-scroll';
import { Text } from '../../context/Language';
import { styles } from '../../styles';
import LogoPNG from '../../assets/ST_Logo.png';

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id='landing' className='flex h-screen'>
      <div className='flex-1 flex items-center justify-center text-center'>
        <div className='h-[50%] flex flex-col justify-between'>
          <h2
            data-aos='fade-in'
            data-aos-duration='2000'
            className='text-[30px] font-thin'
          >
            <Text tid='hero-title' />
            <img src={LogoPNG} alt='logo png' />
          </h2>
          <Logo />
          <h1
            data-aos='fade-in'
            data-aos-duration='2000'
            className={`${styles.heroHeadText} mt-2`}
          >
            Saša Trkulja
          </h1>
          <p
            data-aos='fade-in'
            data-aos-duration='2000'
            className={`${styles.heroSubText} mt-2`}
          >
            <Text tid='hero-text_01' /> <br className='sm:block hidden' />
            <Text tid='hero-text_02' />
          </p>
        </div>
      </div>
      <Link to='project' spy={true} smooth={true} offset={-30} duration={500}>
        <Mouse />
      </Link>
    </div>
  );
};

export default Landing;
