import React from 'react';
import Checkboxes from './Checkboxes';
import Dropdown from './Dropdown';
import SearchField from './SearchField';

const Form = (props) => {
    return (
        <form
            onSubmit={props.handleSubmit}
            style={{
                width: '80vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'flex-start',
            }}
        >
            <SearchField handleChange={props.handleChange} />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    width: '30rem',
                    marginBottom: '10%',
                }}
            >
                <Checkboxes
                    isTeacher={props.isTeacher}
                    isStudent={props.isStudent}
                    handleChange={props.handleChange}
                />
                <Dropdown
                    // campuses={props.campusesList}
                    campusOptions={props.campusOptions}
                    handleChange={props.handleChange}
                />
            </div>
        </form>
    );
};

export default Form;
