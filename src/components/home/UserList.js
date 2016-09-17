import React from 'react';
import { Table } from 'react-bootstrap';

const UserList = () => (
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
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
            </tr>
            </tbody>
        </Table>
    </section>
);
export default UserList;