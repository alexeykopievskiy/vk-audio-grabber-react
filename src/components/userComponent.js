import React, { PropTypes, Component } from 'react'

export default class UserComponent extends Component{
  render() {
    const { name } = this.props;
    return (
      <div>
        <p>Привет, {name}</p>
      </div>
    );
  }
}

UserComponent.PropTypes = {
  name: PropTypes.string.isRequired
}
