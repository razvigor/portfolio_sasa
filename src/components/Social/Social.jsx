import styles from './Social.module.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Social = () => {
  return (
    <div className={styles.socials}>
      <ul data-aos='fade-up' className={styles.list}>
        <li>
          <a
            href='https://github.com/razvigor'
            aria-label='Github'
            className={styles.link}
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/sasa-trkulja-395581148/'
            aria-label='Github'
            className={styles.link}
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
