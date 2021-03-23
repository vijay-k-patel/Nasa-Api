import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GalleryItem = ({ image, id, title }) => (
  <article className="">
    <Link className="" to={`/asset/${id}`} title={title}>
      <div className="">
        <div height={200} once>
          <img
            src={image}
            alt={title}
            title={title}
            className=""
          />
        </div>
      </div>
      {title && <p className="">{title}</p>}
    </Link>
  </article>
);

GalleryItem.propType = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default GalleryItem;
