import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import { getCharacters } from '../services/getCharacters';
import Styles from '../main.css';

export default class AllCharacters extends PureComponent {
    state = {
      characters: [],
      page: 1,
      nextButtonState: false,
      previousButtonState: true
    }
    
    fetchCharacters = () => {
      return getCharacters(this.state.page)
        .then(characters => this.setState({ characters: characters.results }));
    }

    componentDidMount() {
      this.fetchCharacters();
    }

    //put in componentDidUpdate to make sure things change!

    nextButtonPress = () => {
      console.log(this.state.page);
      if(this.state.page === 25) {
        console.log('conditional met for next');
        return this.setState({ nextButtonPress: true });
      }
      this.setState(state => {
        return { page: state.page += 1, previousButtonState: false };
      });
    }

    previousButtonPress = () => {
      console.log('conditional met for previous');
      if(this.state.page <= 1) {
        console.log(this.state.page);
        return this.setState({ previousButtonPress: false });
      }
      this.setState(state => {
        return { page: state.page - 1 };
      });    
    }

    render() {
      const { characters, page, previousButtonState, nextButtonState } = this.state;
      return (
        <>
          <button className={Styles.button} disabled={previousButtonState} onClick={this.previousButtonPress}>Previous</button>
          <p>Page: {page}</p>
          <button className={Styles.button} disabled={nextButtonState} onClick={this.nextButtonPress}>Next</button>
          <Characters characters={characters} />
        </>
      );
    }
}
