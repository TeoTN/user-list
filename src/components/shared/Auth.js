import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth.actions';
import { Button, Navbar } from 'react-bootstrap';

const mapStateToProps = ({auth}) => ({
    auth,
});
const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(actions.signIn()),
    signOut: () => dispatch(actions.signOut()),
});
@connect(mapStateToProps, mapDispatchToProps)
export default class Auth extends Component {
    render() {
        const { signIn, signOut, auth } = this.props;
        if (!auth.loggedIn) {
            return (
                <Button bsStyle="warning" onClick={signIn} bsSize="small"
                        style={{marginTop: '12px'}}>
                    Sign in with Dummy
                </Button>
            );
        }
        else {
            return (
                <Navbar.Text pullRight>
                    <span> Signed in as {auth.username} </span>
                    <a href="#" onClick={signOut}>Sign out</a>
                </Navbar.Text>
            );
        }
    }
}