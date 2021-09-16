import React from 'react'
import { useState } from 'react'
import './App.css';
const AddMovies = (props) => {
   const [name,setName]=useState('new movie')
   const [category,setCategory]=useState('')
   const [stars,setStars]=useState(0)
   const [desc,setDesc]=useState('')
   const [cover,setCover]=useState('')
   const [year,setYear]=useState(0)
   const [quality,setQuality]=useState('')
   const [link,setLink]=useState('')
   const handleclick =(e)=>{
    e.preventDefault();
    props.movie({name:name,category:category,stars:stars,desc:desc,cover:cover,year:year,quality:quality,link:link})
   }
   console.log(props.movie)
    return (
        <>
        
        <form className='add-form'>
        <h1>Add movie</h1>
            <div className='form-control'>
                <label>Movie name:</label>
                <input type='text' placeholder= 'Add movie name'
                 onChange={(e)=> setName(e.target.value)}></input>
            </div>
            <div className='form-control select'>
                <label>Category:</label> 
                <select onChange={(e) => setCategory(e.target.value)} name="Movie category">
                <option value="Romantic">Romantic</option>
                <option value="Storie" >Storie</option>
                <option value="Comedy" >Comedy</option>
                <option value="Course" >Course</option>
                <option value="Action" >Action</option>
                </select>
                
            </div>
            <div className='form-control select'>
                <label>Stars:</label>
                <select onChange={(e) => setStars(e.target.value)} name="Movie stars">
                <option value={1} >1</option>
                <option value={2} >2</option>
                <option value={3} >3</option>
                <option value={4} >4</option>
                <option value={5} >5</option>
                </select>
                
            </div>
            <div className='form-control'>
                <label>Movie description:</label>
                <input type='text' placeholder= 'Movie description'
                 onChange={(e)=> setDesc(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Movie cover:</label>
                <input type='text' placeholder= 'Plaste a link of photo cover'
                onChange={(e)=> setCover(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Year:</label>
                <input type={Number} placeholder= 'Year'
                onChange={(e)=> setYear(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Movie quality:</label>
                <select onChange={(e) => setQuality(e.target.value)} name="Movie quality">
                <option value="HD" >HD</option>
                <option value="LW" >LW</option>
                </select>
                
            </div>
            <div className='form-control'>
                <label>Movie link:</label>
                <input type='text' placeholder= 'Plaste the link of movie'
                onChange={(e)=> setLink(e.target.value)}></input>
            </div>
            <button className='btn-save' onClick={handleclick}  >save</button>

        </form>
        </>
    )
}

export default AddMovies