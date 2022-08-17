import { createSlice } from '@reduxjs/toolkit'

const cardsSlice= createSlice({
    name: 'cards',

    initialState:{
        cards: [
        {
                img: '/sneakers/1.jpg',
                model: 'Nike Blazer Mid Suede',
                info: 'Мужские кроссовки',
                price: 12_999,
                id: 1,
                btnOrderImg: '/icons/btn-plus.svg',
                btnFavoriteImg: '/icons/heart.svg',
                favorite: false,
                ordered: false
        },
        {
              img: '/sneakers/2.jpg',
              model: 'Nike Air Max 270',
              info: 'Мужские кроссовки',
              price: 15_600,
              id: 2,
              btnOrderImg: '/icons/btn-plus.svg',
              btnFavoriteImg: '/icons/heart.svg',
              favorite: false,
              ordered: false,
              
        },
        {
            img: '/sneakers/3.jpg',
            model: 'Nike Blazer Mid Suede',
            info: 'Мужские кроссовки',
            price: 8_499,
            id: 3,
            btnOrderImg: '/icons/btn-plus.svg',
            btnFavoriteImg: '/icons/heart.svg',
            favorite: false,
            ordered: false
        },
        {
          img: '/sneakers/4.jpg',
          model: 'Boku Future Rider',
          info: 'Кроссовки Puma X Aka',
          price: 8_999,
          id: 4,
          btnOrderImg: '/icons/btn-plus.svg',
          btnFavoriteImg: '/icons/heart.svg',
          favorite: false,
          ordered: false
        },
        {
          img: '/sneakers/5.jpg',
          model: 'Under Armour Curry 8',
          info: 'Кроссовки Puma X Aka',
          price: 15_199,
          id: 5,
          btnOrderImg: '/icons/btn-plus.svg',
          btnFavoriteImg: '/icons/heart.svg',
          favorite: false,
          ordered: false
        },
        
        ],

    },

    reducers:{

        changeOrderState(state,action){
            const card = state.cards[action.payload.id]
            card.ordered = !card.ordered
            if (card.ordered){
                card.btnOrderImg = '/icons/btn-checked.svg'
            }
            else{
                card.btnOrderImg = '/icons/btn-plus.svg'
            }
        },

        changeFavoriteState(state,action){
            const card = state.cards[action.payload.id]
            
            card.favorite = !card.favorite
            
            if (card.favorite)
                card.btnFavoriteImg = '/icons/liked.svg'
            else{
                card.btnFavoriteImg = '/icons/heart.svg'
            }
            
        },

    }
})

export const {changeOrderState, changeFavoriteState} = cardsSlice.actions

export default cardsSlice.reducer