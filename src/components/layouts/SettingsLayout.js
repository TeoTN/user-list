import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class SettingsLayout extends Component {
    constructor() {
        super();
        this.state = {
            info: ''
        };
    }
    clean = () => {
        localStorage.removeItem('metadata');
        localStorage.removeItem('users');
        localStorage.removeItem('auth');
        this.setState({info: 'Done'});
        setTimeout(()=>this.setState({info: ''}), 3000);
    };
    render() {
        return (
            <div>
                <h1>User settings</h1>
                <Button onClick={this.clean} bsStyle="danger">
                    <Glyphicon glyph="trash"/>&nbsp;
                    <span>Clean local storage</span>
                </Button>
                <span className="h4 text-success">&nbsp;{this.state.info}</span>
            </div>
        )
    }
};

export default SettingsLayout;