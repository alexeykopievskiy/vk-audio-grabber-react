import React, { PropTypes, Component } from 'react'

export default class PageComponent extends Component{
  render() {
    const { year, audio } = this.props;
    return (
      <div>
        <p>У тебя {audio.length} аудиозаписей за {year} год</p>
      </div>
    );
  }
}

PageComponent.PropTypes = {
  year: PropTypes.number.isRequired,
  audio: PropTypes.string.isRequired
}
