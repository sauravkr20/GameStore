import React from 'react'
import './product.scss'
import { useState, useEffect } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToWish } from '../../redux/cartReducer';


const Product = () => {
    const id = useParams().id;

    const dispatch = useDispatch()
    const [selectedImg, setSelectedImag] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [images_arr, setImages_arr] = useState([]);

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`/game?id=${id}`, {
                    withCredentials: true
                })
                setData(data.data)
                setImages_arr([data.data.thumbnail].concat(data.data.screenshots.map(screenshot => screenshot.image)));
                console.log(images_arr)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [])


    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    {images_arr.map((image, index) => (
                        <img key={index} src={image} alt="" onClick={() => setSelectedImag(index)} />
                    ))}
                </div>
                <div className="mainImg">
                    <img src={images_arr[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>{data.title}</h1>
                <span>{data.status}</span>
                <p>{data.short_description}</p>

                <button className='add' onClick={() => dispatch(addToWish({
                    id: data.id,
                    title: data.title,
                    desc: data.short_description,
                    img: data.thumbnail
                }))}>
                    <FavouriteBorderIcon />Like!
                </button>

                <div className='info'>
                    <span>Publisher: {data.publisher}</span>
                    <span>Developer: {data.developer}</span>
                    <span>Genre: {data.genre}</span>
                    <span>Platform: {data.platform}</span>
                    <span>Release Date: {data.release_date}</span>
                </div>
                <hr />
                <div className='details'>
                    <span>DESCRIPTION</span>
                    <hr />
                    <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
                    <hr />
                </div>
                <div className='details'>
                    <span>MINIMUM SYSTEM REQUIREMENTS</span>
                    <hr />
                    <ul>
                        <li>OS: {data.minimum_system_requirements?.os}</li>
                        <li>Processor: {data.minimum_system_requirements?.processor}</li>
                        <li>Memory: {data.minimum_system_requirements?.memory}</li>
                        <li>Graphics: {data.minimum_system_requirements?.graphics}</li>
                        <li>Storage: {data.minimum_system_requirements?.storage}</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Product
