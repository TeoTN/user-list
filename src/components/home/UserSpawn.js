import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/users.actions';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import { FieldGroup } from '../shared/FieldGroup';
import { createUser } from '../../api/users.api';

const mapStateToProps = ({users}) => ({
    model: users.metadata.model,
});
const mapDispatchToProps = (dispatch) => ({
    add: (data) => dispatch(actions.add(data)),
});

@connect(mapStateToProps, mapDispatchToProps)
class UserSpawn extends Component {
    constructor(props) {
        super(props);
        const {model} = props;
        this.state = {
            showModal: false,
            user: Object.entries(model).reduce((obj, e) => Object.assign(obj, {e: ''}), {}),
        };
    }

    closeForm = () => {
        this.setState({ showModal: false });
    };

    saveUser = () => {
        const { user } = this.state;
        createUser(user)
            .then(this.props.add)
            .then(this.closeForm);
    };

    openForm = () => {
        this.setState({ showModal: true });
    };

    updateField = (event) => {
        const { id, value } = event.target;
        const {user} = this.state;
        this.setState({user: {...user, [id.replace('new-user-','')]: value}});
    };

    render() {
        const {model} = this.props;
        return (
            <div>
                <Button bsStyle="success" bsSize="small" onClick={this.openForm}>
                    <Glyphicon glyph="plus" /> New user
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>New user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            {Object.entries(model).map(([key, label]) =>
                            (key!=='id')?
                                <FieldGroup
                                    id={`new-user-${key}`}
                                    key={key}
                                    type="text"
                                    label={label}
                                    onChange={this.updateField}
                                /> : ''
                            )}
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeForm} bsStyle="link">
                            <span className="text-danger">Cancel</span>
                        </Button>
                        <Button onClick={this.saveUser} bsStyle="success">Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default UserSpawn;