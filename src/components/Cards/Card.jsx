import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss";

const Card = ({ item }) => {
    return (
        <Link className="link" to={`/product/${item.id}`}>
            <div className='card'>
                <div className="image">
                    {item.release_date > "2019-12-24" && <span>latest</span>}
                    <img src={item.thumbnail} alt="" className="mainImg" />
                    <img src={"https://wallpapercave.com/wp/C2jtk9I.jpg"} alt="" className="secondImg" />
                </div>
                <h2>{item.title}</h2>
                <div className='prices'>
                    <h3>{item.platform}</h3>
                    <h3>{item.genre}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card
