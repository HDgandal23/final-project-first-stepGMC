import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


function Details() {

  const { mealsId } = useParams()

  const [load, setLoad] = useState(false)
  const [recipes, setRecipes ] = useState([])


  const fechData = () => {
    setLoad(true)
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((res) => {
      setRecipes(res.data.meals);
        console.log(res.data.meals)
        setLoad(false)
    }).catch(error => {
        console.log(error)
    })
}

useEffect(()=> {
  fechData()
}, [])




  
  return (
    <div>
        
      <div>
        {

        recipes.map((recipe) => {

          if( recipe.idMeal === mealsId.toString() ){

            console.log(recipe)

            return (
              <div className='single-page'> 
                <div className='single-image'>
                  <img className='img' src={recipe.strMealThumb}  alt='single-page'/>
                </div>
                <div className='single-texte'>
                  <h3> { recipe.strMeal } </h3>
                  <p> { recipe.strInstructions } </p>
                  <h4> Les ingrdients </h4>
                  <ul>
                    <li> { recipe.strIngredient1 } </li>
                    <li> { recipe.strIngredient2 } </li>
                    <li> { recipe.strIngredient3 } </li>
                    <li> { recipe.strIngredient4 } </li>
                    <li> { recipe.strIngredient5 } </li>
                  </ul>

                  <button className='btn-link'>
                    <Link className='Link' to='/'>Back to Home</Link>
                  </button>
                </div>
                
              </div>
            )
          }
        })

        }
      </div>
      
     
    </div>
  )
}

export default Details