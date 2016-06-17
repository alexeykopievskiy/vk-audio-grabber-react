import React, { PropTypes, Component } from 'react'

export default class PageComponent extends Component{

  onYearBtnClick(e){
    this.props.setYear(+e.target.innerHTML);
  }

  render() {
    const { year, photo } = this.props;
    return (
      <div>
        <p>
          <button onClick={::this.onYearBtnClick}>2016</button>
          <button onClick={::this.onYearBtnClick}>2015</button>
          <button onClick={::this.onYearBtnClick}>2014</button>
        </p>
        <h3>{year} год</h3>
        <p>У тебя {photo.length} фото</p>
      </div>
    );
  }
}

PageComponent.PropTypes = {
  year: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  setYear: PropTypes.func.isRequired
}
