import React from "react";
import { useRecipes } from "../context/RecipeContext";

function RecipeList({ onEdit }) {
    const { recipes, deleteRecipe } = useRecipes();

    return (
        <div style={{ width: "70%" }}>
            <h2>Recipes</h2>
            <table border="1" width="100%" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                        <th>Prep Time</th>
                        <th>Servings</th>
                        <th>Category</th>
                        <th>Cuisine</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.length === 0 ? (
                        <tr>
                            <td colSpan="9" align="center">No Recipes Added</td>
                        </tr>
                    ) : (
                        recipes.map((recipe, index) => (
                            <tr key={index}>
                                <td>{recipe.name}</td>
                                <td>{recipe.ingredients.join(", ")}</td>
                                <td>{recipe.instructions}</td>
                                <td>{recipe.prepTime}</td>
                                <td>{recipe.servings}</td>
                                <td>{recipe.category}</td>
                                <td>{recipe.cuisine}</td>
                                <td>
                                    <button onClick={() => onEdit(recipe, index)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => deleteRecipe(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default RecipeList;
