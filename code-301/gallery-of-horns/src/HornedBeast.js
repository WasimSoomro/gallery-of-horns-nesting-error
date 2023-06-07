import React from 'react';
import './index.css';
//import Card from 'react-bootstrap/Card'

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

  render(){
    console.log(this.props);
    return(
      <>
      <article>
        <h3>{this.props.title}</h3>
        <p onClick={this.handleFavorites}> {this.state.favorites} Favorites ♥️ </p>
        <img src ={this.props.image_url} alt={this.props.title} />
      </article>
      </>
    )
  }
  // render(){
  //   console.log(this.props);
  //   return (
  //     <Card style = {{width '18rem'}}>
  //       <Card.Title>{this.props.title}</Card.Title>
  //       <Card.Text>
  //         {this.state.likes}Likes
  //       </Card.Text>
  //       <Card.Img on Click={this.handlLike} src={this.props.image_url} alt={this.props.alt} title = {this.props.title} />
  //       <Card.Body>

  //       </Card.Body>
  //   )
  // } 
}

//Code for cards taken from CodeReview
export default HornedBeast;