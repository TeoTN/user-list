import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserSearch from './UserSearch';
import * as actions from '../../actions/users.actions';
import {
    Form,
    ButtonToolbar,
    ButtonGroup,
    Pagination,
    DropdownButton,
    MenuItem
} from 'react-bootstrap';

const mapStateToProps = ({users}) => ({
    metadata: users.metadata
});

const mapDispatchToProps = (dispatch) => ({
    changePage: (page) => dispatch(actions.changePage(page)),
    changePageSize: (event) => dispatch(actions.changePageSize(event)),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class UserToolbar extends Component {
    render() {
        const { page, page_size, pages } = this.props.metadata;
        const { changePage, changePageSize} = this.props;
        return (
            <Form inline>
            <ButtonToolbar>
                <ButtonGroup>
                    <Pagination bsSize="small" prev next first last ellipsis boundaryLinks
                        items={pages} maxButtons={3} activePage={page} style={{'margin': '1px'}}
                        onSelect={changePage} />
                </ButtonGroup>
                <ButtonGroup>
                    <DropdownButton id="items-per-page" bsSize="small" bsStyle="primary"
                                    title={`Items per page: ${page_size}`}>
                        { [5, 10, 15, 20].map(key =>
                            <MenuItem key={key} eventKey={key} onSelect={changePageSize}
                                      active={page_size === key}>
                                Show {key}
                            </MenuItem>
                        ) }
                    </DropdownButton>
                </ButtonGroup>
                <UserSearch />
            </ButtonToolbar>
            </Form>
        );
    }
}