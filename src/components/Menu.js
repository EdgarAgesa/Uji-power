import React from 'react';
import '../css/menu.css';

const Menu = () => {
    const menuItems = {
        "Main Dishes": [
          { id: 1, name: 'Ugali with Sukuma Wiki', description: 'Staple dish made with maize flour served with collard greens.', price: 'Ksh 600' },
          { id: 2, name: 'Nyama Choma', description: 'Grilled meat, usually goat or beef, served with kachumbari.', price: 'Ksh 800' },
          { id: 3, name: 'Pilau', description: 'Spiced rice dish with meat, commonly served on special occasions.', price: 'Ksh 650' },
        ],
        "Sides": [
          { id: 4, name: 'Chapati', description: 'Soft flatbread, usually served with stew.', price: 'Ksh 100' },
          { id: 5, name: 'Mukimo', description: 'Mashed potatoes with greens, maize, and beans.', price: 'Ksh 400' },
        ],
        "Snacks": [
          { id: 6, name: 'Samosa', description: 'Fried pastry with savory filling, commonly meat or vegetables.', price: 'Ksh 150' },
          { id: 7, name: 'Mandazi', description: 'Sweet fried bread, similar to a donut.', price: 'Ksh 100' },
          { id: 8, name: 'Mahindi Choma', description: 'Grilled maize served with salt and chili.', price: 'Ksh 50' },
        ],
        "Beverages": [
          { id: 9, name: 'Chai', description: 'Kenyan tea made with milk and sugar.', price: 'Ksh 70' },
          { id: 10, name: 'Madafu', description: 'Fresh coconut water, commonly available at the coast.', price: 'Ksh 100' },
        ]
      };
      

  return (
    <div className="menu">
      {Object.keys(menuItems).map(category => (
        <div key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-items">
            {menuItems[category].map(item => (
              <div key={item.id} className="menu-item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
