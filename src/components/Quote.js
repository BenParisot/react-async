import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../main.css';

export default function Quote({ character, quote, image }) {
  return (
    <ul className={Styles.quote}>
      <li>{character}</li>
      <li>{quote}</li>
      <li>{image}</li>
    </ul>
  );
}
Quote.propTypes = {
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
