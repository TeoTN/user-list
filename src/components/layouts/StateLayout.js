import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    currentState: state
});

const StateLayout = ({currentState}) => (
    <div>
        <h1>Application state</h1>
        <pre>
            {JSON.stringify(currentState, null, 4)}
        </pre>
    </div>
);

export default connect(mapStateToProps, null)(StateLayout);