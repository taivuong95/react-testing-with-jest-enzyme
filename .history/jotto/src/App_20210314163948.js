import React from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessedWords guessedWords={[
          {guessedWord: 'train', letterMatchCount: 3}
        ] }/>
      </div>
    )
  }
}

export default App;
