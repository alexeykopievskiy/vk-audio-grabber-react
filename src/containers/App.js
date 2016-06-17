import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserComponent from '../components/userComponent'
import PageComponent from '../components/pageComponent'
import * as pageActions from '../actions/pageActions'

class App extends Component {
  render() {
    const { user, page } = this.props;
    const { setYear } = this.props.pageActions;
    return (
      <div>
          <UserComponent name={user.name} />
          <PageComponent photo={page.photo} year={page.year} setYear={setYear} />
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

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
