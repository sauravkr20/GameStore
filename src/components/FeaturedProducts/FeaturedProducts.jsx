import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Cards/Card'
import { useState, useEffect } from 'react'
import axios from "axios"




const FeaturedProducts = ({ platform }) => {
    

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`/games?platform=${platform}`, {
                    withCredentials: true
                })
                setData(data.data)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [])

    return (
        <div className='featuredProducts'>
            <div className='top'>
                <h1>{platform} Games</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam velit quos corrupti laborum aut, earum modi pariatur quod itaque optio sint. Doloremque, quia vel. Sint necessitatibus eius natus maiores repellat.</p>
            </div>
            <div className='bottom'>
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts
