import React from 'react';

const Checkboxes = (props) => {
    return (
        <>
            <div style={{ marginRight: '2%' }}>
                <label htmlFor="teacher">Teacher</label>
                <input
                    type="checkbox"
                    name="teacher"
                    checked={props.isTeacher}
                    onChange={props.handleChange}
                />
            </div>
            <div style={{ marginRight: '2%' }}>
                <label htmlFor="student">Student</label>
                <input
                    type="checkbox"
                    name="student"
                    checked={props.isStudent}
                    onChange={props.handleChange}
                />
            </div>
        </>
    );
};

export default Checkboxes;
