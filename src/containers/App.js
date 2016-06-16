import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserComponent from '../components/userComponent'
import PageComponent from '../components/pageComponent'

class App extends Component {
  render() {
    const { user, page } = this.props;
    return (
      <div>
          <UserComponent name={user.name} />
          <PageComponent audio={page.audio} year={page.year} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
     user: state.user,
     page: state.page
  }
}

export default connect(mapStateToProps)(App);
