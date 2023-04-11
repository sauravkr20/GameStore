import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import './products.scss';

const genres = ["mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social", "sandbox", "open-world", "survival", "pvp", "pve", "pixel", "voxel", "zombie", "turn-based", "first-person", "third-person", "top-down", "tank", "space", "sailing", "side-scroller", "superhero", "permadeath", "card", "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d", "anime", "fantasy", "sci-fi", "fighting", "action-rpg", "action", "military", "martial-arts", "flight", "low-spec", "tower-defense", "horror"]

const Products = () => {

  const id = parseInt(useParams().id);
  const [sort, setSort] = useState(3);
  const [selectedSubCat, setSelectedSubCat] = useState(0)


  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCat(isChecked ? [...selectedSubCat, value] : selectedSubCat.filter((item) => item !== value))
    console.log(selectedSubCat)
  }

  return (
    <div className='products'>
      <div className='left'>

        <div className='filterItem'>
          <h2>Platform</h2>
          <div className='inputItem' >
            <input type="radio" id='pc' value={0} name="cat" onClick={(e) => setSelectedSubCat(0)}></input>
            <label htmlFor='1'>All</label>
          </div>
          <div className='inputItem' >
            <input type="radio" id='pc' value={1} name="cat" onClick={(e) => setSelectedSubCat(1)}></input>
            <label htmlFor='1'>PC</label>
          </div>
          <div className='inputItem' >
            <input type="radio" id='pc' value={2} name="cat" onClick={(e) => setSelectedSubCat(2)}></input>
            <label htmlFor='1'>Browser</label>
          </div>

        </div>




        <div className='filterItem'>
          <h2>Sort By</h2>

          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort(0)} />
            <label htmlFor='desc'>release-date </label>
          </div>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort(1)} />
            <label htmlFor='desc'>popularity </label>
          </div>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort(2)} />
            <label htmlFor='desc'>alphabetical </label>
          </div>

          <div className="inputItem">
            <input type="radio" id="asc" value="desc" name="price" onChange={(e) => setSort(3)} />
            <label htmlFor='desc'>relevance </label>
          </div>


        </div>

      </div>
      <div className='right'>
        <img className="catImg" src="https://wallpaperaccess.com/full/381005.jpg" alt='' />
        <List catId={id} sort={sort} subCats={selectedSubCat} />

      </div>
    </div>
  )
}

export default Products
