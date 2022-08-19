
import Content from "../../components/Content/Content"
import { useSelector} from "react-redux"
import React from "react"

export default React.memo(function Home(props){

  const cards = useSelector(state=>state.cardsState.cards)

    return(
       <>
        <Content pageName='Все кроссовки' inputVisible={true}>
              {cards}
        </Content>
       </>
     )
})