import React from 'react';
import UserList from '../home/UserList';
import UserToolbar from '../home/UserToolbar';

const HomeLayout = () => (
    <div>
        <h1>
            User list
        </h1>
        <UserToolbar />
        <UserList />
        <UserToolbar />
    </div>
);

export default HomeLayout;