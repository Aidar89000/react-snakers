
import './Cart.scss'
import MiniButton from '../UI/MiniButton/MiniButton'
import { useDispatch, useSelector } from 'react-redux'
import {removeOrder, slideCart,changeCartState } from '../../redux/cartSlice'
import { sumTotalPrice } from '../../redux/cartSlice'
import { changeOrderState } from '../../redux/cardsSlice'

const Cart = props =>{

    const dispatch = useDispatch()

    const totalPrice = useSelector(state=>state.cartState.totalPrice)

    const cart = useSelector(state=>state.cartState.cartState)
    const orders = useSelector(state=>state.cartState.orders)
    const orderNumber = useSelector(state=>state.cartState.orderNumber)


    let stateOfCart = 'Cart'

    if (props.active){
        stateOfCart+=' active'
        window.scrollTo(0, window.pageYOffset);
        document.querySelector('body').style.position = 'fixed'
        document.querySelector('body').style.position = -window.pageYOffset + 'px';
        document.querySelector('body').style.overflowY = 'hidden'
    }
    else{
        document.querySelector('body').style.position = 'absolute'
        document.querySelector('body').style.overflowY = 'scroll'
    }

    function cartItems(){
        if (cart===0){
            return (
                <div className='empty-cart'>

                    <img src="/icons/empty-cart.jpg" alt="" />
                    <h2>Корзина пустая</h2>
                    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>

                    <button className='green-btn' onClick={()=>dispatch(slideCart(false))}> 
                        <img src="/icons/arrow.svg" alt="" /> вернуться назад
                    </button>

                </div>
            )
        }
        if (cart===1){
            return (
                <div className='orders-in-cart'>

                    <div className='orders-container'>
                        {
                        orders.map((e,i)=>
                                <div className='order' key={i}>
                                    <img src={e.img} alt="" />

                                    <span className='order__info'>

                                        <p>{e.info}</p>
                                        <p>{e.model}</p>

                                        <h2>{e.price} руб.</h2>

                                    </span>

                                    <span className='order__btn'>
                                        <MiniButton img='/icons/btn-remove.svg'
                                        onClick={()=>{

                                            dispatch(changeOrderState({id:e.id-1}))
                                            dispatch(removeOrder({id:e.id}))
                                            dispatch(sumTotalPrice())

                                        }
                                        }/>
                                    </span>
                                   
                                    </div>
                        )
                        }
                    </div>

                    <div className='order-info'>
                        <p>Итого: <span>{totalPrice} руб.</span></p>
                        <p>Налог 5%: <span>{Math.round(totalPrice*5/100)} руб.</span></p>

                        <button className='green-btn' onClick={()=>dispatch(changeCartState(2))}> 
                        оформить заказ <img src="/icons/arrow.svg" alt="" />
                        </button>
                    </div>

                </div>
            )
        }
        if (cart===2){
            return(
                <div className='completed-cart'>

                    <img src="/icons/complete-order.jpg" alt="" />
                    <h2>Заказ оформлен!</h2>
                    <p>Ваш заказ #{orderNumber} скоро будет передан курьерской доставке</p>

                    <button className='green-btn' onClick={()=>{
                        
                        dispatch(slideCart(false))}}> 
                        <img src="/icons/arrow.svg" alt="" /> вернуться назад
                    </button>

                </div>
            )
        }
    }

    return(
       <div className={stateOfCart}>
        
            <div className={'Cart__header'}>
                <p>Корзина</p>

                <span className={'header__btn-remove'}
                 onClick={()=>dispatch(slideCart(false))}>
                    <MiniButton img='/icons/btn-remove.svg'/>
                </span>

            </div>

            {
                cartItems()                 
            }


       </div>
     )
}
export default Cart