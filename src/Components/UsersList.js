import React from 'react';

const UsersList = (props) => {
    return (
        <table style={{ margin: '0 0 10% 5%' }}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Campus</th>
                    <th>Role</th>
                    <th>Links</th>
                </tr>
            </thead>
            <tbody>{props.displayUsers}</tbody>
        </table>
    );
};

export default UsersList;
