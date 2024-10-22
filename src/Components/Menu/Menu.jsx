import React from 'react';
import './Menu.css';
import background from '../../assets/background.jpeg';
import cake from '../../assets/cake.webp';
import Cheeseburger from '../../assets/Cheeseburger.jpeg';
import Fries from '../../assets/Fries.jpeg';
import smoothie from '../../assets/smoothie.avif';

const Menu = () => {
  return (
    <div className='menu'>
      <h1>
        <span style={{ color: 'black' }}>Our</span>
        <span style={{ color: 'green', marginLeft: 10 }}>Menu</span>
      </h1>
      <h2 style={{color:'gray'}}>Today's Specials</h2>
      <div className='menu-items'>
        <div className='menu-item'>
          <img src={background} alt='Background' className='menu-image' />
          <div className='item-description'>
            <h2>Delicious Pancake Dish</h2>
            <p>A delightful blend of flavors, perfect for any occasion.</p>
            <p style={{paddingTop:15, color:'green'}}>$7.20</p>
          </div>
        </div>
        <div className='menu-item'>
          <img src={cake} alt='Cake' className='menu-image' />
          <div className='item-description'>
            <h2>Chocolate Cake</h2>
            <p>Rich and moist chocolate cake topped with creamy frosting.</p>
            <p style={{paddingTop:15, color:'green'}}>$5.40</p>
          </div>
        </div>
        <div className='menu-item'>
          <img src={Cheeseburger} alt='Cheese Burger' className='menu-image' />
          <div className='item-description'>
            <h2>Cheese Burger</h2>
            <p>Delicious and tasty Cheese Burgers.</p>
            <p style={{paddingTop:15, color:'green'}}>$8.00</p>
          </div>
        </div>
        <div className='menu-item'>
          <img src={Fries} alt='Fries' className='menu-image' />
          <div className='item-description'>
            <h2>Fries</h2>
            <p>Crispy, golden fries seasoned to perfection and served hot, each bite delivers a satisfying crunch followed by a fluffy, tender interior.</p>
            <p style={{paddingTop:15, color:'green'}}>$6.50</p>
          </div>
        </div>
        <div className='menu-item'>
          <img src={smoothie} alt='Smoothie' className='menu-image' />
          <div className='item-description'>
            <h2>Smoothie</h2>
            <p>Refreshing and vibrant, our smoothie blends luscious fruits and creamy yogurt into a silky-smooth delight.</p>
            <p style={{paddingTop:15, color:'green'}}>$3.50</p>
          </div>
        </div>
      </div>
      
      <table className='food-table'>
  <caption style={{color:'gray'}}>Food Menu</caption>
  <thead>
    <tr>
      <th>Food Item</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cheeseburger</td>
      <td>$8.99</td>
    </tr>
    <tr>
      <td>Classic Fries</td>
      <td>$3.49</td>
    </tr>
    <tr>
      <td>Chocolate Cake</td>
      <td>$4.99</td>
    </tr>
    <tr>
      <td>Vanilla Ice Cream</td>
      <td>$2.99</td>
    </tr>
    <tr>
      <td>Pancakes</td>
      <td>$5.99</td>
    </tr>
    <tr>
      <td>Fruit Smoothie</td>
      <td>$6.49</td>
    </tr>
    <tr>
      <td>Caesar Salad</td>
      <td>$7.99</td>
    </tr>
    <tr>
      <td>Grilled Chicken Sandwich</td>
      <td>$9.49</td>
    </tr>
    <tr>
      <td>Spaghetti Bolognese</td>
      <td>$10.99</td>
    </tr>
    <tr>
      <td>BBQ Ribs</td>
      <td>$12.99</td>
    </tr>
    <tr>
      <td>Vegetable Stir Fry</td>
      <td>$8.49</td>
    </tr>
    <tr>
      <td>Nachos</td>
      <td>$5.99</td>
    </tr>
    <tr>
      <td>Onion Rings</td>
      <td>$4.49</td>
    </tr>
    <tr>
      <td>Chicken Wings</td>
      <td>$9.99</td>
    </tr>
    <tr>
      <td>Mushroom Burger</td>
      <td>$10.49</td>
    </tr>
  </tbody>
</table>

    </div>
  );
};

export default Menu;
