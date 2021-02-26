import React, { useState } from 'react';
import './App.css';
import usersJson from './users';
import { v4 as uuidv4 } from 'uuid';
import UsersList from './Components/UsersList';
import Form from './Components/Form';

function App() {
    const [users, setUsers] = useState(usersJson);
    const [searchField, setSearchField] = useState('');
    const [isTeacher, setIsTeacher] = useState(true);
    const [isStudent, setIsStudent] = useState(true);
    const [campusesList, setCampusesList] = useState([
        ...new Set(users.map((user) => user.campus)),
    ]);
    const [selectedCampus, setSelectedCampus] = useState('');

    const handleChange = (event) => {
        if (event.target.type === 'checkbox') {
            if (event.target.name === 'teacher') {
                setIsTeacher(() => !isTeacher);
            } else {
                setIsStudent(() => !isStudent);
            }
        } else if (event.target.type === 'select-one') {
            setSelectedCampus(event.target.value);
        } else {
            setSearchField(event.target.value);
        }
    };
    console.log('selCamp', selectedCampus);

    const campusOptions = campusesList.map((camp) => {
        return (
            <option value={camp} key={camp}>
                {camp}
            </option>
        );
    });

    const filteredSearch = users.filter((user) => {
        return (
            (((isTeacher && user.role === 'teacher') ||
                (isStudent && user.role === 'student')) &&
                `${user.firstName}`
                    .toLowerCase()
                    .includes(`${searchField.toLowerCase()}`)) ||
            (`${user.lastName}`
                .toLowerCase()
                .includes(`${searchField.toLowerCase()}`) &&
                (user.campus === selectedCampus || !campusesList))
        );
    });

    console.log('filteredSearch', filteredSearch);
    // setSearchField('');

    const displayUsers = filteredSearch.map((user) => {
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
            <Form
                isStudent={isStudent}
                isTeacher={isTeacher}
                handleChange={handleChange}
                campusOptions={campusOptions}
                campusesList={campusesList}
            />

            <UsersList displayUsers={displayUsers} />
        </div>
    );
}

export default App;
