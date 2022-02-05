import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Card = ({ id, firstName, lastName, email, avatar, handleDelete }) => {

    return (
        <div className='user-card'>  
            <img src={avatar} alt={firstName} />
            <h3>{firstName} {lastName}</h3>
            <p>{email}</p>
            <Link to={`/${id}`}>
                <button>View Profile</button>
            </Link>
            <Link to={`/${id}/edit`}>
                <Button text="Edit User" />
            </Link>
            <Button text="Delete User" handleDelete={handleDelete} id={id} />
        </div>
    )
}

export default Card;