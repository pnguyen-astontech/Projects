import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import FormControl from "react-bootstrap/lib/FormControl";
import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";

export default class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      isModalOpen: false,
      articleTitle: props.title,
      infoText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur."  
     };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  openModal() { this.setState({ isModalOpen: true }); }
  closeModal() { this.setState({ isModalOpen: false }); }
  handleChange(e) {this.setState({ infoText: e.target.value }); }
  handleTitleChange(e) {this.setState({ articleTitle: e.target.value }); }

  render() {
    return (
      <div class="col-md-4">
        <h4>{ this.state.articleTitle }</h4>
        <p>{this.state.infoText}</p>
        <Button onClick={this.openModal} bsStyle="primary" bsSize="sm">Edit Info</Button>

        <Modal show={this.state.isModalOpen} onHide={this.closeModal} container={this} aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title>Edit Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Edit Info Text</p>
            <FormControl type="text" placeholder="Article Title" value={ this.state.articleTitle } onChange={this.handleTitleChange}/>

            <FormGroup>
              <ControlLabel>Textarea</ControlLabel>
              <FormControl componentClass="textarea" placeholder="textarea" value={ this.state.infoText } onChange={this.handleChange} style={{ height: 200}}/>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }


}