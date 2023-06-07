import React from 'react';

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
  
}

export default HornedBeast;