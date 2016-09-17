import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import UserListHeader from './UserListHeader';
import { fetchUsers } from '../../api/users.api';
import * as actions from '../../actions/users.actions';

const mapStateToProps = (state) => ({
    list: state.users.list,
    metadata: state.users.metadata,
});

const mapDispatchToProps = (dispatch) => ({
    receiveList: (metadata) => dispatch(actions.receiveList(metadata)),
    fetchDone: () => dispatch(actions.fetchDone()),
});

@connect(mapStateToProps, mapDispatchToProps)
class UserList extends Component {
    fetchData() {
        const { receiveList, fetchDone, metadata } = this.props;
        fetchUsers(metadata)
            .then(receiveList, console.error.bind(console))
            .then(fetchDone);
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevValue) {
        const metadataDidChange = (prev, curr) => {
            for (let key in curr) {
                if (key !== 'loading' && prev[key] !== curr[key]) {
                    return true;
                }
            }
            return false;
        };
        if (metadataDidChange(prevValue.metadata, this.props.metadata)) {
            this.fetchData();
        }
    }

    renderUser(user) {
        const { model } = this.props.metadata;

        return (
            <tr key={user.id}>
                {
                    Object.entries(model).map(
                        ([key, label]) => <td key={key}>{user[key]}</td>
                    )
                }
            </tr>
        );
    }

    renderLoading() {
        return (
            <tr key="loading">
                <td colSpan="6">
                    <span className="text-info"> Loading... </span>
                </td>
            </tr>
        );
    }

    renderEmpty() {
        return (
            <tr key="loading">
                <td colSpan="6">
                    <span className="text-danger"> Users matching criteria were not found </span>
                </td>
            </tr>
        );
    }

    render() {
        const { list } = this.props;
        const { loading } = this.props.metadata;
        return (
            <section>
                <Table striped hover>
                    <UserListHeader />
                    <tbody>
                        {
                            loading ?
                            this.renderLoading() :
                                list.length ?
                                    list.map(this.renderUser.bind(this)) :
                                    this.renderEmpty()
                        }
                    </tbody>
                </Table>
            </section>
        );
    }
}

export default UserList;