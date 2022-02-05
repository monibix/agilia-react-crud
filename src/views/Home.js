import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

import Card from '../components/Card';
import Form from '../components/Form';

const Home = () => {

    const [data, setData] = useState()
    console.log('data state', data);
    const [isLoading, setIsLoading] = useState(true)

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
        console.log('handle delete');
        setIsLoading(true)
        fetch(`https://reqres.in/api/users/${id}`)
            .then(res=>res.json())
            .then(response => {
                let newList = [...data?.filter(item=>item.id !== response.data.id)]
                console.log("NEW LIST", newList);
                setData(newList)
                setIsLoading(false)
            })
    }

    let initialFormState = { first_name:"", last_name:"", email:"" }
    const [form, setForm] = React.useState(initialFormState)


    const handleChange = (e) => {
        console.log('e', e.target.value);
        const {name, value} = e.target;
        setForm({...form, [name]: value})
        console.log("form", form);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        const newUser = {...form}
        console.log("newUser", newUser);

        fetch(`https://reqres.in/api/users`, {method: 'POST', body: JSON.stringify(newUser)})
            .then(res=>res.json())
            .then(response => {
                console.log('response', response.ok);
                let newData = data.concat(newUser)
                setData(newData) 
                setIsLoading(false)
            })
    }

    return (
        <>  
            <h1>Users</h1>
                <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
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
