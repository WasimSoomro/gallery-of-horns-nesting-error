import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data/data.json';
import './Main.css'

class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map(hornedBeastObj => {
          return <HornedBeast key={hornedBeastObj._id} title={hornedBeastObj.title} image_url={hornedBeastObj.image_url}/>
        })}
      {/* <HornedBeast title="Impala" description="Impala" image_url="impala.jpg" />
      <HornedBeast title="Waterbuck" description="Waterbuck in Kenya"/> */}
      </main>
    )
  }
}

export default Main;


//Impala Photo from https://unsplash.com/photos/tXxMqc5M4PE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText

//Waterbuck Photo from https://unsplash.com/photos/PwdIfHPxKSs