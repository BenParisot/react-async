import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../main.css';

export default function Character({ name, status, species, image }) {
  return (
    <ul className={Styles.quote}>
      <li>{name}</li>
      <li>{status}</li>
      <li>{species}</li>
      <li>{image}</li>
    </ul>
  );
}
Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
