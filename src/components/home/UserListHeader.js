import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/users.actions';
import { Glyphicon } from 'react-bootstrap';

const mapStateToProps = (state) => ({
    sorting: state.users.metadata.sorting,
    model: state.users.metadata.model,
});
const mapDispatchToProps = (dispatch) => ({
    sort: (column, dir) => dispatch(actions.sort(column, dir)),
});

@connect(mapStateToProps, mapDispatchToProps)
class UserListHeader extends Component {
    getDirection(key) {
        const { sorting } = this.props;
        return  sorting.column !== key ?
            'asc' :
            sorting.order === 'asc' ? 'desc' : 'asc'
    }

    getHeader([key, label]) {
        const { sort, sorting } = this.props;
        const isSortCriterion = sorting.column === key;
        const dir = sorting.order === 'asc';
        return (
            <th key={key} onClick={() => sort(key, this.getDirection(key))}
                style={{cursor: 'pointer'}}>
                {label}&nbsp;
                {isSortCriterion ? <Glyphicon glyph={`sort-by-alphabet${dir?'':'-alt'}`}/> : null}
            </th>
        )
    }

    render() {
        const { model } = this.props;
        return (
            <thead>
                <tr>
                    {
                        Object
                            .entries(model)
                            .map(this.getHeader.bind(this))
                    }
                </tr>
            </thead>
        )
    }
}
export default UserListHeader;