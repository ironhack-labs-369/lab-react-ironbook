import { useState } from 'react';
import './App.css';
import users from './users';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
        console.log('search', search);
    };
    const handleSubmit = (event) => {
        // event.preventDefault();
        setSearch('');
    };
    const displayContacts = users.map((user, index) => {
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
                    style={{ width: '60vw' }}
                />
                <button type="submit">Search</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Campus</th>
                        <th>Role</th>
                        <th>Links</th>
                    </tr>
                </thead>
                <tbody>{displayContacts}</tbody>
            </table>
        </div>
    );
}

export default App;
