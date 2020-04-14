import React from 'react';
import './QuoteCard.css';

class QuoteCard extends React.Component {
  render() {
    return (
      <div className="QuoteCard">
        <img src={this.props.image} alt="Character's Photo"/>
        <h3><em>{this.props.quote}</em></h3>
        <h4>-{this.props.character}</h4>
      </div>
    )
  }
}
export default QuoteCard;