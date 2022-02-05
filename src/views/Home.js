import React, { useState, useEffect } from 'react';

import Card from '../components/Card';
import Form from '../components/Form';

let initialFormState = { first_name:"", last_name:"", email:"" }

const Home = () => {

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [form, setForm] = React.useState(initialFormState)
    const [message, setMessage] = useState("")

    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=2')
          .then(res=>res.json())
          .then(data => {
            setData(data.data)
            setIsLoading(false)
          })
          .catch(e => console.log('Error', e))
    },[])
    
    const handleDelete = (id) => {
        setIsLoading(true)
        fetch(`https://reqres.in/api/users/${id}`)
            .then(res=>res.json())
            .then(response => {
                let newList = [...data?.filter(item=>item.id !== response.data.id)]
                setData(newList)
                setIsLoading(false)
            })
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {...form}

        fetch(`https://reqres.in/api/users`, 
            {method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)})
            .then(res=>res.json())
            .then(response => {
                setMessage('User added successfully')
            })
        
        setForm(initialFormState)

    }

    return (
        <>  
            <h1>Users</h1>
                <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
                { message && <p className='user-msg'>{message}</p>}
                { isLoading && <p>Cargando...</p>}
            <div className="card-container">
            {
                data?.map((user, key)=>{
                    return <Card key={user.id} 
                                firstName={user.first_name} 
                                lastName={user.last_name} 
                                email={user.email} 
                                avatar={user.avatar} 
                                id={user.id}
                                handleDelete={handleDelete}
                                />
                })
            }
            </div>
        </>
    )
}

export default Home;
