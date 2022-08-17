import classes from './Content.module.css'
import Input from '../UI/Input/Input'
import Card from '../Card/Card'
import { useState } from 'react'

const Content = props =>{

    const [inputText, setInputText] = useState('')

    return(
       <div className={classes['content']}>
            <header className={classes['content__header']}>
                <p>{props.pageName}</p>

                {props.inputVisible?<Input placeholder='Поиск...'
                onChange={e=>setInputText(e.target.value.trim().toUpperCase())}/>:null}

            </header>

            <div className={classes['content__cards']}>
                {props.children?props.children.map((card, i)=>{

                if (card.model.toUpperCase().search(inputText)!==-1 || card.info.toUpperCase().search(inputText)!==-1)
                    return(
                        <Card img={card.img} info={card.info} model={card.model}
                        ordered={card.ordered} btnFavoriteImg={card.btnFavoriteImg} favorite={card.favorite}
                        key={i} id={card.id} price={card.price} btnOrderImg={card.btnOrderImg}
                       
                        />
                    )
                else{
                    return null
                }

                 }):null}
            </div>

       </div>
     )
}
export default Content