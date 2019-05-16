import React from 'react';
import Quote from './Quote';
import PropTypes from 'prop-types';
import Styles from '../main.css';

export default function Quotes({ quotes }) {
  const quotesList = quotes.map(quote => {
    return <Quote key={quote.quote} character={quote.character} quote={quote.quote} image={quote.image} />;
  });

  return (
    <section className={Styles.list}>
      {quotesList}
    </section>
  );
}
Quotes.propTypes = {
  quotes: PropTypes.array.isRequired
};
