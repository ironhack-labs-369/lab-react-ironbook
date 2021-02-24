import { useState } from 'react';
import './App.css';
import usersJson from './users';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [searchField, setSearchField] = useState('');
    const [users, setUsers] = useState(usersJson);

    const handleChange = (event) => {
        setSearchField(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const filtered = users.filter((person) => {
            return (
                person.firstName
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                person.lastName
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        });
        console.log('filtered', filtered);
        setUsers(() => [...filtered]);
        setSearchField('');
    };
    const displayUsers = users.map((user) => {
        return (
            <tr key={uuidv4()}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>{user.linkedin}</td>
            </tr>
        );
    });
    return (
        <div className="App">
            <form
                onSubmit={handleSubmit}
                style={{
                    width: '80vw',
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: '5% 0 3% 5%',
                }}
            >
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                    onChange={handleChange}
                    style={{ width: '27rem' }}
                />
                <button type="submit">Search</button>
            </form>
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
                <tbody>{displayUsers}</tbody>
            </table>
        </div>
    );
}

export default App;
