import React from 'react';

class HornedBeast extends React.Component {
  render(){
    console.log(this.props);
    return(
      <>
      <article>
        <h3>{this.props.title}</h3>
        <img src ={this.props.image_url} alt={this.props.title} />
        {/* <img title={this.props.title}
        alt={this.props.description}
        src={this.props.image_url}>
        </img>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p> */}
      </article>
      </>
    )
  }
  
}

export default HornedBeast;