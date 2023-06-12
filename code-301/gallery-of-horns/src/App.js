import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json';
import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     favorites: '',
    showModal: false,
    selectedBeast: '',
    selectedImage: '',
    selectedDescription: '',
    horns: '',
    myHorns: '',
    sortedData: data

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

handleSubmit = (event) => {
  event.preventDefault();
  
  this.setState({
    horns: event.target.horns.value
  })
  console.log('from state in submit handler: ', this.state.horns);
}

handleInput = (event) => {
  this.setState({
    myHorns: event.target.value
  })
}

handleSelect = (event) => {
let selected = parseInt(event.target.value);
if(selected === "1"){
  let newData = data.filter(beast => beast.horns === 1);
  this.setState({
    sortedData: newData
  })
} else if(selected === "2"){
  let newData = data.filter(beast => beast.horns === 2);
} else if(selected === "3"){
  let newData = data.filter(beast => beast.horns === 3);
} else if(selected === "100") {
  let newData = data.filter(beast => beast.horns === 100);
} else if(selected === "all"){
  this.setState({
    sortedData: data
  });
}
}

render() {
  console.log(this.state.sortedData);
  return (
    <>
      <h1> Filter By # of Horns</h1>
      <Form>
        <Form.Select onChange={this.handleSelect}>
          <option value="">Select an Option</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">100</option>
        </Form.Select>
      </Form>
      {/* <ListGroup>
      {this.state.sortedData.map((num, index) => {
        return <ListGroup.Item key={index}>{num}</ListGroup.Item>
        })}
      </ListGroup> */}
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


export default App;

//referenced from in class demo from Gerald Bruno
//referenced modal code from in class demo from Rocio Martinez

// handleSubmit = (event) => {
//   event.preventDefault();
  
//   this.setState({
//     horns: event.target.horns.value
//   })
//   console.log('from state in submit handler: ', this.state.horns);
// }

// handleInput = (event) => {
//   this.setState({
//     myHorns: event.target.value
//   })
// }

// <p> After form submit: {this.state.horns}</p>
//       <p> On input: {this.state.horns}</p>
//        <form onSubmit ={this.handleSubmit}>
//       <fieldset>
//         <legend>Number of Horns</legend>
//         <label htmlFor="horns">Number of Horns: </label>
//         <input id="horns" type="number" name="number" onInput={this.handleInput}></input>
//       </fieldset>
//       <button type="submit">Submit</button>
//     </form>