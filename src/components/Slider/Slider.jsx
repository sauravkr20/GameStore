import React from 'react'
import './slider.scss'
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";



const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const [images, setImages] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get('/games', {
                    withCredentials: true
                })
                setImages(data.data)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [])


    const data = [
        "http://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "http://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "http://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ]


    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 6 : (prev) => prev - 1);
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 6 ? 0 : (prev) => prev + 1);
    }

    return (
        <div className='slider'>
            <div className='container' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

                {images.map(item => (
                    <img src={item.thumbnail} alt="" />
                ))}
            </div>
            <div className='icons'>
                <div className='icon' onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className='icon' onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider
