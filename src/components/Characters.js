import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';
import Styles from '../main.css';

export default function Characters({ characters }) {
  const charactersList = characters.map(character => {
    return <Character key={character.id} name={character.name} status={character.status} species={character.species} image={character.image} id={character.id} />;
  });

  return (
    <section className={Styles.list}>
      {charactersList}
    </section>
  );
}
Characters.propTypes = {
  characters: PropTypes.array.isRequired
};
