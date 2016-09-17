import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import UserListHeader from './UserListHeader';
import UserItem from './UserItem';
import InfoLoading from './InfoLoading';
import ErrorEmpty from './ErrorEmpty';
import { fetchUsers } from '../../api/users.api';
import * as actions from '../../actions/users.actions';

const mapStateToProps = (state) => ({
    list: state.users.list,
    metadata: state.users.metadata,
    auth: state.auth,
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
        /* Trigger loading user list whenever metadata updates */
        const metadataDidChange = (prev, curr) => {
            for (let key in curr) {
                if (prev[key] !== curr[key]) {
                    if (key === 'loading' && !curr[key]) continue;
                    return true;
                }
            }
            return false;
        };
        if (metadataDidChange(prevValue.metadata, this.props.metadata)) {
            this.fetchData();
        }
    }

    render() {
        const { list, auth } = this.props;
        const { loading, model } = this.props.metadata;
        return (
            <section>
                <Table striped hover>
                    <UserListHeader />
                    <tbody>
                        {
                            loading ?
                                (<InfoLoading/>) :
                                list.length ?
                                    list.map(user => (
                                        <UserItem
                                            key={user.id} user={user} model={model}
                                            highlight={user.username === auth.username}
                                        />)
                                    ) :
                                    (<ErrorEmpty/>)
                        }
                    </tbody>
                </Table>
            </section>
        );
    }
}

export default UserList;