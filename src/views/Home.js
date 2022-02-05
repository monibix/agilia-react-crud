import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';

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

    return (
        <>
            <h1>Users</h1>
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
