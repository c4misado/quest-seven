import React from 'react';
import QuoteCard from './QuoteCard';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
    };
    this.getQuote = this.getQuote.bind(this);
  }
  
  getQuote() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          values: data[0]
        });
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <QuoteCard image={this.state.values.image} quote={this.state.values.quote} character={this.state.values.character}/>
        <button type="button" onClick={this.getQuote}>Get Quote</button>
      </div>
    );
  }
}

export default App;
