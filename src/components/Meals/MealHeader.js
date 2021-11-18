import React from 'react'
import Fav from '../../images/fav.svg'
import FastD from '../../images/fast.png'
import './MealHeader.scss'

const MealHeader = () => {
    return (
        <section className='mealHeader'>
            <div className='sub'>
                <h2> ChopNownow</h2>
                <div>
                    <p> <img src={Fav}/>Min. order ₦1,200.00 Min. delivery fee ₦450.00</p>
                    <div className='fastD'>
                        <img src={FastD} className='fastDimg'/> <span>Fast Delivery</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MealHeader
