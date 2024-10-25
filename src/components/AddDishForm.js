import React, { useState } from 'react';
import IngredientInput from './IngredientInput';
import '../css/AddDish.css';

function AddDishForm() {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '' }]);
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].name = value;
    setIngredients(updatedIngredients);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDish = {
      name: dishName,
      description,
      ingredients,
    };
    console.log('New Dish:', newDish);
    setDishName('');
    setDescription('');
    setIngredients([]);
  };

  return (
    <form onSubmit={handleSubmit} className="add-dish-form">
      <h2>Add a New Dish</h2>
      <div className="form-group">
        <label>Dish Name:</label>
        <input
          type="text"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="ingredients-section">
        <h3>Ingredients:</h3>
        {ingredients.map((ingredient, index) => (
          <IngredientInput
            key={index}
            index={index}
            ingredient={ingredient}
            onChange={handleIngredientChange}
            onRemove={handleRemoveIngredient}
          />
        ))}
        <button type="button" onClick={handleAddIngredient}>
          Add Ingredient
        </button>
      </div>
      <button type="submit">Save Dish</button>
    </form>
  );
}

export default AddDishForm;
