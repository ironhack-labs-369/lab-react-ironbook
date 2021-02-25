import { useState } from 'react';
import './App.css';
import usersJson from './users';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [users, setUsers] = useState(usersJson);
    const [searchField, setSearchField] = useState('');
    const [isTeacher, setIsTeacher] = useState(true);
    const [isStudent, setIsStudent] = useState(true);
    const [campus, setCampus] = useState([
        ...new Set(users.map((user) => user.campus)),
    ]);

    const handleChange = (event) => {
        console.log('type', event.target.type);
        if (event.target.type === 'checkbox') {
            if (event.target.name === 'teacher') {
                setIsTeacher(() => !isTeacher);
            } else {
                setIsStudent(() => !isStudent);
            }
        } else if (event.target.type === 'select') {
            setCampus(event.target.value);
        } else {
            setSearchField(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const filteredSearch = users.filter((user) => {
            return (
                ((isTeacher || isStudent) &&
                    `${user.firstName}`
                        .toLowerCase()
                        .includes(`${searchField.toLowerCase()}`)) ||
                (`${user.lastName}`
                    .toLowerCase()
                    .includes(`${searchField.toLowerCase()}`) &&
                    (user.campus === campus || !campus))
            );
        });

        console.log('filteredSearch', filteredSearch);
        setUsers(() => [...filteredSearch]);
        // setSearchField('');
    };

    const campusList = () => {
        campus.map((camp) => {
            return (
                <option value={camp} key={camp}>
                    {camp}
                </option>
            );
        });
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
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'flex-start',
                }}
            >
                <div
                    style={{
                        margin: '5% 0 3% 0',
                    }}
                >
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search..."
                        onChange={handleChange}
                        style={{ width: '20rem' }}
                    />
                    <button type="submit">Search</button>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        width: '30rem',
                        marginBottom: '10%',
                    }}
                >
                    <div style={{ marginRight: '2%' }}>
                        <label htmlFor="teacher">Teacher</label>
                        <input
                            type="checkbox"
                            name="teacher"
                            checked={isTeacher}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ marginRight: '2%' }}>
                        <label htmlFor="student">Student</label>
                        <input
                            type="checkbox"
                            name="student"
                            checked={isStudent}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="campus">Campus</label>
                        <select
                            name="campus"
                            id="campus"
                            value={campus}
                            style={{ width: ' 6rem' }}
                            onChange={handleChange}
                        >
                            <option value="">All</option>
                            {campusList}
                        </select>
                    </div>
                </div>
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
