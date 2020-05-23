import React from 'react';
import PropTypes from 'prop-types';


export const MovieCard = ({
  title,
  img
}) => {

  const backgroundImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 100,
    position: 'relative',
    zIndex: 1,
  }

  return (
    <article>
      <img className="movie-card" style={backgroundImage} alt="" />
      <span className="movie-card-title">{title}</span>
    </article>
  );
}


MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};