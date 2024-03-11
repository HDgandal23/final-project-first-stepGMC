import React from 'react'

function RecipCard({recipe}) {
    const {idMeal, strMeal, strMealThumb, strCategory } = recipe;
  return (
    
        
        <div className='card'>
            <img className='image-card' src={strMealThumb} alt={strMeal}/>
            <div className='card-text'>
                <span>Categorie : {strCategory} </span>
                <h3> {strMeal} </h3>

            </div>
        </div>
    
  )
}

export default RecipCard