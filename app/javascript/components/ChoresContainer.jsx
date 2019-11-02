import React, { Component } from "react";
import Header from '../Header';
import Body from '../Body';
import Chore from '../Chore';

class ChoresContainer extends Component {
  render () {
    return (
      <div>
          <Header />
          <Chore />
          <Body />
        </div>
    );
  }
}

export default ChoresContainer;
