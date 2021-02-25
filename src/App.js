import { useState } from 'react';
import './App.css';
import usersJson from './users';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [searchField, setSearchField] = useState('');
    const [users, setUsers] = useState(usersJson);
    const [roleTeacher, setRoleTeacher] = useState(false);
    const [roleStudent, setRoleStudent] = useState(false);

    const handleChange = (event) => {
        setSearchField(event.target.value);
    };

    const handleCheck = (event) => {
        if (event.target.name === 'teacher') {
            setRoleTeacher(() => !roleTeacher);
        } else {
            setRoleStudent(() => !roleStudent);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const filteredSearch = users.filter((person) => {
            return (
                person.firstName
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                person.lastName
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        });
        console.log('filteredSearch', filteredSearch);
        setUsers(() => [...filteredSearch]);
        // setSearchField('');
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
            <label htmlFor="teacher">Teacher</label>
            <input
                type="checkbox"
                name="teacher"
                checked={roleTeacher}
                onChange={handleCheck}
            />
            <label htmlFor="student">Student</label>
            <input
                type="checkbox"
                name="student"
                checked={roleStudent}
                onChange={handleCheck}
            />
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
