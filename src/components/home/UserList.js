import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchUsers } from '../../api/users.api';
import { receiveList } from '../../actions/users.actions';

const mapStateToProps = (state) => ({
    list: state.users.list,
    preprocessing: state.users.preprocessing,
});

const mapDispatchToProps = (dispatch) => ({
    receiveList: (preprocessing) => dispatch(receiveList(preprocessing)),
});

@connect(mapStateToProps, mapDispatchToProps)
class UserList extends Component {
    fetchData() {
        const { receiveList, preprocessing } = this.props;
        fetchUsers(preprocessing).then(receiveList, console.error.bind(console));
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevValue) {
        if (this.props.preprocessing !== prevValue.preprocessing) {
            this.fetchData();
        }
    }

    renderUser(user) {
        return (
            <tr>
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
            <tr>
                <td colSpan="6">
                    <span className="text-info"> Loading... </span>
                </td>
            </tr>
        );
    }

    render() {
        const { list } = this.props;
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
                        { list.length ? list.map(this.renderUser) : this.renderLoading() }
                    </tbody>
                </Table>
            </section>
        );
    }
}

export default UserList;