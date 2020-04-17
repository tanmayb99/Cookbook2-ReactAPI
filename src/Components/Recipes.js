import React, { useState } from "react";
import { myRecipes } from "../data";
import "../styles.css";

export default function Recipes() {
  const [recipes, setRecipes] = useState("");

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setRecipes(myRecipes);
          }}
        >
          Click me
        </button>
      </div>
      <div>
        {recipes &&
          recipes.map((recipe, index) => {
            return (
              <div>
                {recipe.index}
                {recipe.recipeName}
              </div>
            );
          })}
      </div>
    </div>
  );
}

// Cards Recipes from API
/*
export default function Recipes() {
  const [recipes, setRecipes] = useState("");

  const fetchData = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then(res => res.json())
      .then(finalResult => setRecipes(finalResult))
      .catch(err => console.log("You got error"));
  };

  return (
    <div>
      <div>
        <button className="btn btn-dark btn-lg" onClick={fetchData}>
          Click Me
        </button>
      </div>
      <br />
      <div className="cards-wrapper">
        {recipes.meals &&
          recipes.meals.map((recipe, index) => {
            return (
              <div className="card">
                <img
                  className="card-img-top"
                  src={recipe.strMealThumb}
                  alt="mealPhoto"
                />
                <div claclassNamess="card-body">
                  <h4>Recipe #{index + 1}</h4>
                  <h5 className="card-title">{recipe.strMeal}</h5>
                  <p className="card-text">
                    <ul>
                      <li>
                        <u>Category</u>: {recipe.strCategory}
                      </li>
                      <li>
                        <u>Origin</u>: {recipe.strArea}
                      </li>
                      <li>
                        <u>Tags</u>: {recipe.strTags}
                      </li>
                      <li>
                        <u>Youtube</u>:{" "}
                        <a href={recipe.strYoutube}>{recipe.strMeal}</a>
                      </li>
                    </ul>
                  </p>
                  <button className="btn btn-primary" onClick={fetchData}>
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
*/

//Full Recipe from API
/*
              <div className="recipe" key={index}>
                <h3>Recipe #{index + 1}</h3>
                <h2>{recipe.strMeal}</h2>
                <div>
                  <p>
                    <u>Category</u>: {recipe.strCategory}
                  </p>
                  <p>
                    <u>Origin</u>: {recipe.strArea}
                  </p>
                  <div id="div-instructions">
                    <p>
                      <u>Instructions</u>: {recipe.strInstructions}
                    </p>
                  </div>
                  <div>
                    <div id="div-wrapper">
                      <div id="div-photo">
                        <p>
                          <img src={recipe.strMealThumb} alt="mealPhoto" />
                        </p>
                        <p>
                          <u>Tags</u>: {recipe.strTags}
                        </p>
                        <p>
                          <u>Youtube</u>:{" "}
                          <a href={recipe.strYoutube}>{recipe.strMeal}</a>
                        </p>
                      </div>
                      <div id="div-table">
                        <table className="table table-striped table-hover table-sm">
                          <caption>{recipe.strMeal}</caption>
                          <thead className="thead-dark">
                            <tr>
                              <th className="col">Ingredient</th>
                              <th className="col">Measure</th>
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
              </div>
              */
