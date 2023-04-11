import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import './Cart.scss'
import { useSelector } from 'react-redux'
import { removeItem, resetWishList } from '../../redux/cartReducer'
import { useDispatch } from 'react-redux'

const Cart = () => {
    const dispatch = useDispatch()
    const game = useSelector(state => state.cart.games)
    return (
        <div className='cart'>
            <h1>Liked Games</h1>

            {game?.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item?.desc.substring(0, 100)}</p>
                    </div>
                    <DeleteOutlinedIcon className="delete" onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <button onClick={() => dispatch(resetWishList())}>RESET WISHLIST</button>
        </div>
    )
}

export default Cart
