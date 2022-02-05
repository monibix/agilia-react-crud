import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, id, handleDelete }) => {

    const handleClick = () => {
        console.log('id', id);
        handleDelete(id)
    }

    return (
        <>         
            <button onClick={handleClick}>{text}</button>
        </>
    )
}

export default Button;
