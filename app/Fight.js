import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import bootstrap from 'bootstrap'

export default class Fight extends Component {
  render() {
    const { characterOne, characterTwo, openModal, closeModal, modal} = this.props
      return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={openModal}
        >
          Fight!
        </Button>
        <Modal show={modal.modal}
          closeTimeoutMS={150}>
          <Modal.Header closeButton>
            <Modal.Title>Winner Winner Chicken Dinner</Modal.Title>
          </Modal.Header>
          <Modal.Body>Text</Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

