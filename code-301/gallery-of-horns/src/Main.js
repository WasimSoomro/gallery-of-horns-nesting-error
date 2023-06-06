import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    return (
      <>
      <HornedBeast title="Impala" description="Impala with mouse antlers" image_url="impala.jpg" />
      <HornedBeast title="" />
      </>
    )
  }
}

export default Main;


//Impala Photo by <a href="https://unsplash.com/@sickpanda?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Meyer</a> on <a href="https://unsplash.com/photos/tXxMqc5M4PE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> 
  