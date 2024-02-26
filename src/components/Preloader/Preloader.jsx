import { useState, useEffect } from 'react';
import { gsap, Expo } from 'gsap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useCallback } from 'react';

const Preloader = () => {
  const [counter, setCounter] = useState(0);

  const reveal = useCallback(() => {
    const t1 = gsap.timeline({});

    t1.to('.follow', {
      width: '100%',
      ease: Expo.easeInOut,
      duration: 0.4,
      delay: 0.1,
    })
      .to('.hide', { opacity: 0, duration: 0.3 })
      .to('.follow', {
        height: '100%',
        ease: Expo.easeInOut,
        duration: 0.2,
      })
      .to('.content', { width: '100%', ease: Expo.easeInOut, duration: 0.7 });
  }, []);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, [reveal]);

  return (
    <AppContainer>
      <Loading>
        <Follow className='follow'></Follow>
        <ProgressBar
          className='hide'
          id='progress-bar'
          style={{ width: counter + '%' }}
        ></ProgressBar>
      </Loading>

      <Content className='content'></Content>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
`;
const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;
const Follow = styled.div`
  position: absolute;
  background: linear-gradient(112.1deg, #000000 11.4%, #2d3436 70.2%);
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const Content = styled.div`
  height: 100%;
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #000000;
  padding: auto;
  z-index: 2;
  overflow: hidden;
  color: #fff;
`;

Preloader.propTypes = {
  setLoading: PropTypes.func,
};

export default Preloader;
