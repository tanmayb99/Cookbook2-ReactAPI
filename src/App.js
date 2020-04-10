import React, { useState, useEffect } from "react";
import Recipes from "./Components/Recipes";
import "./styles.css";

export default function App() {
  /*const [recipes, setRecipes] = useState("");

  const fetchData = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then(res => res.json())
      .then(finalResult => setRecipes(finalResult))
      .catch(err => console.log("You got error"));
      
  };*/

  /*
  useEffect(() => {
    fetchData();
  }, []);
  */

  return (
    <div className="App">
      <h1> Click the button to have a look on your favorite recipes </h1>
      <Recipes />

      {/* <h2> Fetch a list of an API and display it </h2> */}
      {/*
      <div className="fetch-button">
        <button onClick={fetchData}>Fetch Button</button>
      </div>

      <div className="recipes">
        {recipes.meals &&
          recipes.meals.map((recipe, index) => {
            return (
              <div className="recipe" key={index}>
                <h3>Recipe {index + 1}</h3>
                <h2>{recipe.strMeal}</h2>

                <div className="details">
                  <p>Category: {recipe.strCategory}</p>
                  <p>Country: {recipe.strArea}</p>
                  <p>Instructions: {recipe.strInstructions}</p>
                  <div>
                    <div>
                      <p>
                        Photo: <img src={recipe.strMealThumb} alt="mealPhoto" />
                      </p>
                      <p>Tags: {recipe.strTags}</p>
                      <p>
                        Youtube: <a href={recipe.strYoutube}>Push Me</a>
                      </p>
                    </div>
                    <div>
                      <table>
                        <caption>{recipe.strMeal}</caption>
                        <thead>
                          <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{recipe.strIngredient1}</td>
                            <td>{recipe.strMeasure1}</td>
                          </tr>
                          <tr>
                            <td>{recipe.strIngredient2}</td>
                            <td>{recipe.strMeasure2}</td>
                          </tr>
                          <tr>
                            <td>{recipe.strIngredient3}</td>
                            <td>{recipe.strMeasure3}</td>
                          </tr>
                          <tr>
                            <td>{recipe.strIngredient4}</td>
                            <td>{recipe.strMeasure4}</td>
                          </tr>
                          <tr>
                            <td>{recipe.strIngredient5}</td>
                            <td>{recipe.strMeasure5}</td>
                          </tr>
                          <tr>
                            <td>{recipe.strIngredient6}</td>
                            <td>{recipe.strMeasure6}</td>
                          </tr>
                          <tr>
                            <td>{recipe.strIngredient7}</td>
                            <td>{recipe.strMeasure7}</td>
                          </tr>
                          <tr>
                            <td>{recipe.strIngredient8}</td>
                            <td>{recipe.strMeasure8}</td>
                          </tr>
                          <tr>
                            <td>{recipe.strIngredient9}</td>
                            <td>{recipe.strMeasure9}</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td>Hello</td>
                            <td>Hello</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      */}
    </div>
  );
}
