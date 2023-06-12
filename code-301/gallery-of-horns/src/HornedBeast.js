import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
  constructor(props){
    super();

    this.state = {
      favorites: 0
    }
  }

  handleFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })
  }

  // displayBeast = () => {
  //   this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description);
  // }
  // From code review

handleNameClick = () => {
  this.props.OpenModal(this.props.title, this.props.image_url, this.props.description);
}
// from CodeReview this.props.title, this.props.image_url, this.props.description);
  render(){
    //console.log(this.props);
    return(
      <>
      <article>
      <Card style={{ width: '18rem' }}>
        <h3> {this.props.title}</h3>
        <p onClick={this.handleFavorites}> {this.state.favorites} Favorites ♥️ </p>
        <img 
        onClick={this.handleNameClick} 
        src ={this.props.image_url} 
        alt={this.props.title} />
      </Card>
      </article>
      </>
    )
  }
}

//Code for cards taken from CodeReview
export default HornedBeast;

//TA Help