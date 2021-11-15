import React from 'react'
import mealsImage from '../../images/image.jpg';
import './header.scss';
import LangButton from './LangButton';


import CartButton from './CartButton'

const Header = (props) => {
    return (
      <div>
        <header className='header'>
          <h1>ActiveMeals</h1>
          <LangButton/>
          <CartButton onClick={props.onShowCart} />
        </header>
        <div className='main-image'>
          <img src={mealsImage} alt='img' />
        </div>
      </div>
    );
  };
  
  export default Header;


