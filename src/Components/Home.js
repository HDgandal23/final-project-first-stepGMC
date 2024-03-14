import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Banner from './Banner'
import RecipCard from './RecipCard'
import Search from './Search'


function Home() {

    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState("")
    const [allrecipes, setAllrecipes] = useState([])


    const findData = () => {
        setLoading(true)
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => {
            setRecipes(res.data.meals);
            console.log(res.data.meals)
            setLoading(false)
        }).catch(error => {
            console.log(error)
        })
    }

    const fechAllData = () => {
        setLoading(true)
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((res) => {
            setAllrecipes(res.data.meals);
            console.log(res.data.meals)
            setLoading(false)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {

        findData()
        fechAllData()
    }, [])

    const handalSearch = event => {

        event.preventDefault()
        fechAllData()
    }

  return (
    
    <div>
        {
            recipes && recipes.length > 0 ? recipes.map((recipe) => (

                <Banner  banner={recipe.strMealThumb}/>

            )): "Meal Not Found"
        }
        <div >
            <h2 className='title'>Our recipes</h2>
            <div>
                <Search
                handalSearch = {handalSearch}
                value = {query}
                onChange = {event => setQuery(event.target.value)}
                loading = {loading}
                />
            </div>
            
            <div className='all-recipes'>
                {
                allrecipes && allrecipes.length > 0 ? allrecipes.map((recipes) => (
                    
                    <RecipCard key={recipes.idMeal} recipe={recipes}/>
                   
                    

                )): "Meal Not Found"
                }
            </div>
       

        </div>

       

        
    </div>
  )
}

export default Home