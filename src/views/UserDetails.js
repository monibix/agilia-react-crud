import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const UserDetails = () => {

    const {userId} = useParams()
    console.log("userid", userId);
    
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${userId}`)
          .then(res=>res.json())
          .then(data => {
            setData(data)
            console.log("data", data);
            setIsLoading(false)
          })
          .catch(e => console.log('Error', e))
    },[])
    console.log('data user', data);

    return (
        <>  
            {isLoading && <p>Cargando...</p>}
            <div className='user-details-container'>  
                <h1>{data?.data.first_name} {data?.data.last_name}</h1>
                <img src={data?.data.avatar} alt={data?.data.first_name}/>
                <p>{data?.data.email}</p>
                <Button text="Edit Profile" />
                <Link to="">
                    <Button text="Back Home" />
                </Link>
            </div>
        </>

    )
}

export default UserDetails;