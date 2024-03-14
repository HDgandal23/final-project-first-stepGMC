import React from 'react'
import { Link } from 'react-router-dom';

function RecipCard({recipe}) {
    const {idMeal, strMeal, strMealThumb, strCategory } = recipe;
  return (
    
        
        <div id={idMeal} className='card'>
            
            <img className='image-card' src={strMealThumb} alt={strMeal}/>
            <div className='card-text'>
                <span>Categorie : {strCategory} </span>
                <h3> {strMeal} </h3>
                <Link className='link-card' to={`/details/${idMeal}`}>View details</Link>

            </div>
            
        </div>
    
  )
}

export default RecipCard