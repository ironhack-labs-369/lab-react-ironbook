import React from 'react';

const Dropdown = (props) => {
    return (
        <div>
            <label htmlFor="campus">Campus</label>
            <select
                name="campus"
                id="campus"
                value={props.campus}
                style={{ width: ' 6rem' }}
                onChange={props.handleChange}
            >
                <option value="">All</option>
                {props.campusList}
            </select>
        </div>
    );
};

export default Dropdown;
