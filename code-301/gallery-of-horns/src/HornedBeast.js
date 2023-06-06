import React from 'react';

class HornedBeast extends React.Component {
  render(){
    console.log(this.props);
    return(
      <>
      <article>
        <p>Hello {this.props.title}!</p>
      </article>
      </>
    )
  }
  
}

export default HornedBeast;