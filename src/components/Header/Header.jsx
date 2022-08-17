import { NavLink } from "react-router-dom"

import classes from './Header.module.css'

import {useSelector, useDispatch} from 'react-redux'
import { slideCart } from "../../redux/cartSlice"

const Header = props =>{

    const dispatch = useDispatch()
    const totalPrice = useSelector(state=>state.cartState.totalPrice)

    return(
        <nav>
    
            <NavLink to={'home'} className={classes['nav__logo']}>

                <img src="/icons/logo.png" alt='кросовок'/>
                
                <span className={classes['logo__text']}>
                    <p>REACT SNEAKERS</p>
                    <span>Магазин лучших кроссовок</span>
                </span>
                
            </NavLink>
      

            <div className={classes['nav__buttons']}>

                <div className={classes['cart']}
                 onClick={()=>dispatch(slideCart(true))}>
                    <img src="/icons/cart.svg" alt="" />
                    <p>{totalPrice} руб.</p>
                </div>

                <NavLink to='/favorite'>
                    <img src="/icons/heart.svg" alt="заказы" />
                </NavLink>

                <NavLink to='/orders'>
                    <img src="/icons/user.svg" alt="любимое" />
                </NavLink>
            </div>

        </nav>
     )
}
export default Header