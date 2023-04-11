import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteOutlineOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./Navbar.scss";
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const game = useSelector(state => state.cart.games)
    const [open_cat, setOpen_cat] = useState(false);
    const [open, setOpen] = useState(false);
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className="item" onClick={() => {
                        console.log(open_cat)
                        return setOpen_cat(!open_cat)
                    }}>
                        <span>Categories</span>
                        <ArrowDropDownIcon />
                        {open_cat && <div className="dropdown" >
                            <Link className="link" to="/products/0">MMORPG</Link>
                            <Link className="link" to="/products/1">Shooter</Link>
                            <Link className="link" to="/products/2">Strategy</Link>
                            <Link className="link" to="/products/3">MOBA</Link>
                            <Link className="link" to="/products/4">Racing</Link>
                            <Link className="link" to="/products/5">Sports</Link>
                            <Link className="link" to="/products/6">Social</Link>
                            <Link className="link" to="/products/7">Sandbox</Link>
                            <Link className="link" to="/products/8">Open World</Link>
                            <Link className="link" to="/products/9">Survival</Link>
                            <Link className="link" to="/products/10">PvP</Link>
                            <Link className="link" to="/products/11">PvE</Link>
                            <Link className="link" to="/products/12">Pixel</Link>
                            <Link className="link" to="/products/13">Voxel</Link>
                            <Link className="link" to="/products/14">Zombie</Link>
                            <Link className="link" to="/products/15">Turn-Based</Link>
                            <Link className="link" to="/products/16">First-Person</Link>
                            <Link className="link" to="/products/17">Third-Person</Link>
                            <Link className="link" to="/products/18">Top-Down</Link>
                            <Link className="link" to="/products/19">Tank</Link>
                            <Link className="link" to="/products/20">Space</Link>
                            <Link className="link" to="/products/21">Sailing</Link>
                            <Link className="link" to="/products/22">Side-Scroller</Link>
                            <Link className="link" to="/products/23">Superhero</Link>
                            <Link className="link" to="/products/24">Permadeath</Link>
                            <Link className="link" to="/products/25">Card</Link>
                            <Link className="link" to="/products/26">Battle Royale</Link>
                            <Link className="link" to="/products/27">MMO</Link>
                            <Link className="link" to="/products/28">MMOFPS</Link>
                            <Link className="link" to="/products/29">MMOTPS</Link>
                            <Link className="link" to="/products/30">3D</Link>
                            <Link className="link" to="/products/31">2D</Link>
                            <Link className="link" to="/products/32">Anime</Link>
                            <Link className="link" to="/products/33">Fantasy</Link>
                            <Link className="link" to="/products/34">Sci-Fi</Link>
                            <Link className="link" to="/products/35">Fighting</Link>
                            <Link className="link" to="/products/36">Action RPG</Link>
                            <Link className="link" to="/products/37">Action</Link>
                            <Link className="link" to="/products/38">Military</Link>
                            <Link className="link" to="/products/39">Martial Arts</Link>
                            <Link className="link" to="/products/40">Flight</Link>
                            <Link className="link" to="/products/41">Low-Spec</Link>
                            <Link className="link" to="/products/42">Tower Defense</Link>
                            <Link className="link" to="/products/43">Horror</Link>
                        </div>}
                    </div>

                </div>
                <div className='center'><Link className="link" to="/">GAMESTORE</Link></div>
                <div className='right'>
                    <div className='item'><Link className="link" to="/">Homepage</Link></div>
                    <div className='item'><Link className="link" to="/">Contact</Link></div>
                    <div className='icons'>
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <div className='cartIcon' onClick={() => setOpen(!open)}>
                            <FavoriteOutlineOutlinedIcon />
                            <span>{game.length}</span>
                        </div>
                    </div>

                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar
