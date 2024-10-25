import React from 'react';

function IngredientInput({ index, ingredient, onChange, onRemove }) {
  return (
    <div className="ingredient-input">
      <input
        type="text"
        value={ingredient.name}
        onChange={(e) => onChange(index, e.target.value)}
        placeholder="Enter ingredient"
      />
      <button type="button" onClick={() => onRemove(index)}>
        Remove
      </button>
    </div>
  );
}

export default IngredientInput;
