import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ src, text, height = 45 }) => {
  return (
    <span>
      <img
        src={src}
        alt={text}
        height={height}
        style={{ borderRadius: '50%', marginRight: '10px' }}
      />
      {text}
    </span>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string,
  height: PropTypes.number,
};

export default Avatar;
