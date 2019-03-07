import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../auth/authActions';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }
  changeOpen() {
    this.setState({ open: !this.state.open })
  }
  render() {
    const { name, email } = this.props.user
    return (
  )
  }
}
const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)