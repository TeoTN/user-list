import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/users.actions';
import {
    FormGroup,
    FormControl,
    InputGroup,
    Button,
    Glyphicon
} from 'react-bootstrap';

const mapDispatchToProps = (dispatch) => ({
    search: (lookup) => dispatch(actions.filter(lookup)),
});
@connect(null, mapDispatchToProps)
export default class UserSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lookup: ''
        }
    }

    updateLookup = (event) => {
        this.setState({lookup: event.target.value})
    };

    render() {
        const { search } = this.props;
        const { lookup } = this.state;
        return (
        <FormGroup bsSize="small">
            <InputGroup>
                <FormControl type="text" placeholder="Search by username"
                             onChange={this.updateLookup}/>
                <InputGroup.Button>
                    <Button bsSize="small" bsStyle="info" onClick={() => search(lookup)}>
                        <Glyphicon glyph="search" />
                    </Button>
                </InputGroup.Button>
            </InputGroup>
        </FormGroup>
        );
    }
}
