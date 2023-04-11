import React from 'react';
import "./List.scss";
import Card from '../Cards/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

const genres = ["mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social", "sandbox", "open-world", "survival", "pvp", "pve", "pixel", "voxel", "zombie", "turn-based", "first-person", "third-person", "top-down", "tank", "space", "sailing", "side-scroller", "superhero", "permadeath", "card", "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d", "anime", "fantasy", "sci-fi", "fighting", "action-rpg", "action", "military", "martial-arts", "flight", "low-spec", "tower-defense", "horror"]

const sort_opt = ["release-date", "popularity", "alphabetical", "relevance"]

const platform_opt = ["all", "pc", "browser"]

const List = ({ subCats, sort, catId }) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`/games?platform=${platform_opt[subCats]}&category=${genres[catId]}&sort-by=${sort_opt[sort]}`, {
                    withCredentials: true
                })
                setData(data.data)
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [subCats, catId, sort])

    return (
        <div className='list'>
            {data?.map(item => (
                <Card item={item} key={item.id} />
            ))}</div>
    )
}


export default List;