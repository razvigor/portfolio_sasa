import PropTypes from 'prop-types';

const Cancel = ({ onCancel }) => {
  return (
    <div style={{ cursor: 'pointer' }} onClick={onCancel}>
      <svg
        width='36'
        height='36'
        viewBox='0 0 36 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18 33C26.25 33 33 26.25 33 18C33 9.75 26.25 3 18 3C9.75 3 3 9.75 3 18C3 26.25 9.75 33 18 33Z'
          stroke='grey'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13.7549 22.245L22.2449 13.755'
          stroke='grey'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M22.2449 22.245L13.7549 13.755'
          stroke='grey'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};

Cancel.propTypes = {
  onCancel: PropTypes.func,
};

export default Cancel;
