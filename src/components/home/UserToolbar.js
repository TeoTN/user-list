import React, { Component } from 'react';
import UserSearch from './UserSearch';
import {
    Form,
    ButtonToolbar,
    ButtonGroup,
    Pagination,
    DropdownButton,
    MenuItem
} from 'react-bootstrap';

export default class UserToolbar extends Component {
    render() {
        return (
            <Form inline>
            <ButtonToolbar>
                <ButtonGroup>
                    <Pagination bsSize="small" prev next first last ellipsis boundaryLinks
                        items={25} maxButtons={3} activePage={7} style={{'margin': '1px'}}
                        onSelect={() => {}} />
                </ButtonGroup>
                <ButtonGroup>
                    <DropdownButton id="items-per-page" bsSize="small" bsStyle="primary"
                                    title="Items per page: 10">
                        <MenuItem eventKey="1">5</MenuItem>
                        <MenuItem eventKey="2">10</MenuItem>
                        <MenuItem eventKey="3">15</MenuItem>
                        <MenuItem eventKey="4">20</MenuItem>
                    </DropdownButton>
                </ButtonGroup>
                <UserSearch />
            </ButtonToolbar>
            </Form>
        );
    }
}