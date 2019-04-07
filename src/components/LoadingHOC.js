import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';

const LoadingHOC = (WrappedComponent,mapStateToProps) => {    
    const cmp = class extends Component{             
      render() {    
        const style=this.props.fetched === false ? {'display':'none'}:{};
        var currentProps = {
            ...this.props,
            style
        }
        return <Layout {...currentProps}><WrappedComponent {...currentProps}/></Layout>
      } 
    };
    return connect(mapStateToProps)(cmp);
};

export default LoadingHOC;
