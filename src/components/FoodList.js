import React from 'react';
import '../css/FoodList.css';
import '../css/FoodList.css';

const FoodList = () => {
    const foods = [
        { id: 1, name: 'Nyama Choma', description: 'Grilled meat served with kachumbari (a fresh tomato and onion salad).', price: 'Ksh 600' },
        { id: 2, name: 'Ugali with Sukuma Wiki', description: 'Maize meal served with sautéed greens.', price: 'Ksh 150' },
        { id: 3, name: 'Chapati and Beans', description: 'Soft chapati served with stewed beans.', price: 'Ksh 120' },
        { id: 4, name: 'Githeri', description: 'A traditional mix of boiled maize and beans.', price: 'Ksh 100' },
        { id: 5, name: 'Pilau', description: 'Spiced rice with chunks of meat.', price: 'Ksh 300' },
        { id: 6, name: 'Samosa', description: 'Deep-fried pastry with a savory meat or vegetable filling.', price: 'Ksh 50' },
        { id: 8, name: 'Mandazi', description: 'Sweet fried dough, a popular snack.', price: 'Ksh 30' },
        { id: 9, name: 'Fish and Ugali', description: 'Whole fried fish served with ugali.', price: 'Ksh 500' },
        { id: 10, name: 'Kuku Choma', description: 'Grilled chicken with a side of kachumbari.', price: 'Ksh 500' },
    ];
    

  return (
    <div className="food-list">
      {foods.map(food => (
        <div key={food.id} className="food-card">
          <h3>{food.name}</h3>
          <p>{food.description}</p>
          <p className="price">{food.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
