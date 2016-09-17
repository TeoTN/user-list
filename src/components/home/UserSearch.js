import React, { Component } from 'react';
import {
    FormGroup,
    FormControl,
    InputGroup,
    Button,
    Glyphicon
} from 'react-bootstrap';

export default class UserSearch extends Component {
    render() {
        return (
        <FormGroup bsSize="small">
            <InputGroup>
                <FormControl type="text" placeholder="Search by username" />
                <InputGroup.Button>
                    <Button bsSize="small" bsStyle="info">
                        <Glyphicon glyph="search" />
                    </Button>
                </InputGroup.Button>
            </InputGroup>
        </FormGroup>
        );
    }
}
