import React from 'react'
import Fav from '../../images/fav.svg'
import FastD from '../../images/fast.png'
import './MealHeader.scss'

const MealHeader = () => {
    return (
        <section className='mealHeader'>
            <div className='sub'>
                <h2> ChopNowNow</h2>
                <div>
                    <span> <img src={Fav} className='favIcon'/>  Min. order ₦1,200.00 Min. delivery fee ₦450.00</span>
                    <p className='fastD'>
                        <img src={FastD} className='fastDimg'/> <span>Fast Delivery</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MealHeader
