
import './Card.scss'

import MiniButton from '../UI/MiniButton/MiniButton'
import { useDispatch } from 'react-redux'
import { changeOrderState } from '../../redux/cardsSlice'
import { changeFavoriteState } from '../../redux/cardsSlice'
import { addCardToCart, sumTotalPrice } from '../../redux/cartSlice'
import React from "react"


function Card(props){

    const dispatch = useDispatch()

    let btnFavoriteClasses = 'Card__favorite'

    const addOrderToCart = ()=>{

            dispatch(changeOrderState({id:props.id-1}))
            dispatch(addCardToCart(
            {img: props.img,
            model: props.model,
            info: props.info,
            price: props.price,
            id: props.id,
            ordered: props.ordered
        }))

            dispatch(sumTotalPrice())    

    }
    if (props.favorite){
        btnFavoriteClasses+=' active'
    }

        return(

            <div className={'Card'}>

                <div className={btnFavoriteClasses}>
                    
                <MiniButton img={props.btnFavoriteImg}
                    onClick={()=>dispatch(changeFavoriteState({id:props.id-1}))}
                    className= {'heart-button'}/>
                </div>
                
                <img src={props.img} alt="" />
              
                <div className={'Card__top'}>
                    <p>{props.info}</p>
                    <p>{props.model}</p>
                </div>

                <div className={'Card__bottom'}>

                    <div className={'Card__price'}>

                        <span>Цена:</span>
                        <p>{props.price} руб.</p>

                    </div>

                    <span className={'Card__btn-plus'}>
                        <MiniButton img={props.btnOrderImg}
                        onClick={addOrderToCart} />
                    </span>
                    
                </div>

            </div>

        )

}
export default React.memo(Card)