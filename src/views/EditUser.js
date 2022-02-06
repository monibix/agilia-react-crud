import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';

let initialFormState = { first_name:"", last_name:"", email:"" }


const EditUser = () => {

    const {userId} = useParams()

    const [form, setForm] = useState(initialFormState)
    const [message, setMessage] = useState('')

    const handleEdit = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {...form}
        fetch(`https://reqres.in/api/users/${userId}`, 
            {method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
            })
            .then(res=>{
                res.json()
            })
            .then(response => {
                console.log('response', response);
                setMessage('User edited successfully')
            })
    }

    return (
        <>
           <h1>EDIT USER</h1>
            <form className='create-container' method='PUT' onSubmit={handleSubmit} >
                <input type="text" placeholder='First Name' name='first_name' value={form.first_name} onChange={handleEdit} />
                <input type="text" placeholder='First Name' name='last_name' value={form.last_name} onChange={handleEdit} />
                <input type="text" placeholder='First Name' name='email' value={form.email} onChange={handleEdit} />
                <button className='create-btn' onSubmit={handleSubmit}>Edit _User</button>
            </form> 
            {
                message && <p className='user-msg'>{message}</p>
            }
           <Link to="">
                <Button text="Back Home" />
            </Link>
        </>
    )
}

export default EditUser;