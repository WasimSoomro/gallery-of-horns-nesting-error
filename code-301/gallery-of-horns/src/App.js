import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json';
import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     favorites: '',
    showModal: false,
    selectedBeast: '',
    selectedImage: '',
    selectedDescription: ''
  }
}

addFavorites = () => {
this.setState({
  favorites: this.state.favorites + '♥️'
})
}

handleOpenModal = (title, image_url, description) => {
  this.setState({
    showModal:true,
    selectedBeast: title,
    selectedImage: image_url,
    selectedDescription: description
  })
}

handleCloseModal = () => {
  this.setState({
    showModal:false
  })
}
render() {
  console.log(this.state.selectedBeast);
  return (
    <>
    <form>
      <fieldset>
        <legend>Number of Horns</legend>
        
      </fieldset>
    </form>
    <Header 
    favorites={this.state.favorites}
    />
    <Main 
    addFavorites={this.addFavorites}
    OpenModal={this.handleOpenModal}
    data={data}
    />
    <SelectedBeast 
    showModal={this.state.showModal} 
    handleCloseModal={this.handleCloseModal} 
    selectedBeast={this.state.selectedBeast}
    selectedImage={this.state.selectedImage}
    selectedDescription={this.state.selectedDescription}
    />
    <Footer /> 
    </>
  )
}
}

// handleOpenModal = (title, image_url, description) => {
//   this.setState({
//     showModal: true,
//     beastTitle: title,
//     beastImg: image_url,
//     beastDescription: description
//   })
// }
// handleCloseModal = () => {
//   this.setState({
// showModal: false
//   })
// }


export default App;

//referenced from in class demo from Gerald Bruno
//referenced modal code from in class demo from Rocio Martinez