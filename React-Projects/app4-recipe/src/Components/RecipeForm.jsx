import React, { useState } from "react";
import { useRecipes } from "../context/RecipeContext";
import RecipeList from "./RecipeList";

function RecipeForm() {
    const { addRecipe, updateRecipe } = useRecipes();
    const [formData, setFormData] = useState({
        name: "",
        ingredients: [],
        instructions: "",
        prepTime: "",
        servings: "",
        category: "Breakfast",
        cuisine: "Italian",
    });
    const [editIndex, setEditIndex] = useState(null);
 
    const ingredientOptions = ["Flour", "Sugar", "Eggs", "Milk", "Butter"];
    const categories = ["Breakfast", "Lunch", "Dinner", "Dessert"];
    const cuisines = ["Italian", "Chinese", "Indian", "Mexican"];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === "ingredients") {
            if (checked) {
                setFormData({ ...formData, ingredients: [...formData.ingredients, value] });
            } else {
                setFormData({
                    ...formData,
                    ingredients: formData.ingredients.filter((i) => i !== value),
                });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = () => {
        if (editIndex !== null) {
            updateRecipe(editIndex, formData);
            setEditIndex(null);
        } else {
            addRecipe(formData);
        }
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            name: "",
            ingredients: [],
            instructions: "",
            prepTime: "",
            servings: "",
            category: "Breakfast",
            cuisine: "Italian",
        });
    };

    const startEditing = (recipe, index) => {
        setFormData(recipe);
        setEditIndex(index);
    };

    return (
        <div style={{ width: "30%" }}>
            <h2>{editIndex !== null ? "Edit Recipe" : "Add Recipe"}</h2>

            <label>Recipe Name:</label><br />
            <input type="text" name="name" value={formData.name} onChange={handleChange} /><br /><br />

            <label>Ingredients:</label><br />
            {ingredientOptions.map((item) => (
                <div key={item}>
                    <input
                        type="checkbox"
                        name="ingredients"
                        value={item}
                        checked={formData.ingredients.includes(item)}
                        onChange={handleChange}
                    />
                    {item}
                </div>
            ))}<br />

            <label>Instructions:</label><br />
            <textarea name="instructions" rows="3" value={formData.instructions} onChange={handleChange} /><br /><br />

            <label>Preparation Time (mins):</label><br />
            <input type="number" name="prepTime" value={formData.prepTime} onChange={handleChange} /><br /><br />

            <label>Servings:</label><br />
            <input type="number" name="servings" value={formData.servings} onChange={handleChange} /><br /><br />

            <label>Category:</label><br />
            <select name="category" value={formData.category} onChange={handleChange}>
                {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                ))}
            </select><br /><br />

            <label>Cuisine Type:</label><br />
            <select name="cuisine" value={formData.cuisine} onChange={handleChange}>
                {cuisines.map((cui) => (
                    <option key={cui}>{cui}</option>
                ))}
            </select><br /><br />

            <button onClick={handleSubmit}>
                {editIndex !== null ? "Update Recipe" : "Add Recipe"}
            </button>

            <RecipeList onEdit={startEditing} />
        </div>
    );
}

export default RecipeForm;
