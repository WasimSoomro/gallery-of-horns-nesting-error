import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render(){
    return(
      <>
<Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
<Modal.Header closeButton>
  <Modal.Title>{this.props.selectedBeast}</Modal.Title>
  <Modal.Body>
  <img src = {this.props.selectedImage} alt = 'HornedBeast'/>
  </Modal.Body>
    </Modal.Header>
</Modal>
      </>
    )
  }
}

export default SelectedBeast;

//TA Help 