import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {
  render(){
    return(
      <>
<Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
<Modal.Header closeButton>
  {/* <Modal.Title>{this.props.selectedBeast.title}</Modal.Title> */}
  <Modal.Body>
    <Card >
  <Card.Img src = {this.props.selectedBeast.image_url} alt = 'HornedBeast'/>
  <Card.Body>
    <Card.Title>
      {this.props.selectedBeast.title}
    </Card.Title>
    {this.props.selectedBeast.description}
  </Card.Body>
    </Card>
  </Modal.Body>
    </Modal.Header>
</Modal>
      </>
    )
  }
}

export default SelectedBeast;

//TA Help 