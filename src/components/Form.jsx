import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Form = ({ form, handleChange, handleSubmit }) => {

    return (
            <form className="create-container" action="https://reqres.in/api/users" method="post" onSubmit={handleSubmit}>
                <input type="text" placeholder='First Name' name='first_name' value={form.first_name} onChange={handleChange} />
                <input type="text" placeholder='Last Name' name='last_name' value={form.last_name} onChange={handleChange} />
                <input type="text" placeholder='email' name='email' value={form.email} onChange={handleChange} />
                <button className='create-btn' onClick={handleSubmit}> Create User </button>
            </form>
    )
}

export default Form;