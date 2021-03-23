import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ children }) => {
  const galleryItems = children.map(child => (
    <div className="" key={Math.random()}>
      {child}
    </div>
  ));

  return <div className="">{galleryItems}</div>;
};

Gallery.propTypes = {
  children: PropTypes.node
};

export default Gallery;
