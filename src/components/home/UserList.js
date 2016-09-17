import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchUsers } from '../../api/users.api';
import { receiveList, fetchDone } from '../../actions/users.actions';

const mapStateToProps = (state) => ({
    list: state.users.list,
    metadata: state.users.metadata,
});

const mapDispatchToProps = (dispatch) => ({
    receiveList: (metadata) => dispatch(receiveList(metadata)),
    fetchDone: () => dispatch(fetchDone())
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
        return (
            <tr key={user.id}>
                {
                    Object.entries(user).map(
                        ([prop, value]) => <td key={prop}>{value}</td>
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
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Post title</th>
                        <th>Views</th>
                        <th>Likes</th>
                        <th>Created on</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            loading ?
                            this.renderLoading() :
                                list.length ?
                                    list.map(this.renderUser) :
                                    this.renderEmpty()
                        }
                    </tbody>
                </Table>
            </section>
        );
    }
}

export default UserList;