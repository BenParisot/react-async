import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import { getCharacters } from '../services/getCharacters';

export default class AllCharacters extends PureComponent {
    state = {
      characters: []
    }
    
    fetchCharacters = () => {
        
      return getCharacters()
    //   .then(characters => console.log(characters.results));
        .then(characters => this.setState({ characters: characters.results }));
    }

    componentDidMount() {
      this.fetchCharacters();
    }

    render() {
      const { characters } = this.state;
      //   console.log(characters);
        return <Characters characters={characters} />;
    //   return <p>Hi</p>;
    }
}
