import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
      modalIsopen: false,
      showBlock: false,
  }

  showModal = () => {
    this.setState({ modalIsopen: true });
  }
  closeModal = () => {
    this.setState({ modalIsopen: false });
  }
  
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button>Toggel</button>
        {this.state.showBlock && <div></div> }
        {this.state.modalIsopen && <Modal closed={this.closeModal}  />}
        {this.state.modalIsopen && <Backdrop  />}
        <button onClick={this.showModal} className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
