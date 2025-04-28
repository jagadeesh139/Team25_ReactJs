import React, { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    const addRecipe = (recipe) => {
        setRecipes([...recipes, recipe]);
    };

    const updateRecipe = (index, updatedRecipe) => {
        const newRecipes = [...recipes];
        newRecipes[index] = updatedRecipe;
        setRecipes(newRecipes);
    };

    const deleteRecipe = (index) => {
        setRecipes(recipes.filter((_, i) => i !== index));
    };

    return (
        <RecipeContext.Provider value={{ recipes, addRecipe, updateRecipe, deleteRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipes = () => {
    return useContext(RecipeContext);
};
