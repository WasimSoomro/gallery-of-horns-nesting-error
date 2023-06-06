import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    return (
      <>
      <HornedBeast title="Impala" description="Impala" image_url="impala.jpg" />
      <HornedBeast title="Waterbuck" description="Waterbuck in Kenya"/>
      </>
    )
  }
}

export default Main;


//Impala Photo from https://unsplash.com/photos/tXxMqc5M4PE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText

//Waterbuck Photo from https://unsplash.com/photos/PwdIfHPxKSs