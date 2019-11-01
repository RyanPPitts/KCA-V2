import React from "react"
import PropTypes from "prop-types"
class Chores extends React.Component {
  render () {
    return (
      <React.Fragment>
        Title: {this.props.title}
        Amount: {this.props.amount}
        Completed: {this.props.completed}
      </React.Fragment>
    );
  }
}

Chores.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.node,
  completed: PropTypes.bool
};
export default Chores
