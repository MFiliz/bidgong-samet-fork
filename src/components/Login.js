import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';

class Login extends Component {
  render() {
    return (
      <Layout>
        Login Page
      </Layout>
    )
  }
}

export default connect()(Login);