
import Content from "../../components/Content/Content"
import { useSelector } from "react-redux"

const Home = props =>{

  const cards = useSelector(state=>state.cardsState.cards)

    return(
       <>

        <Content pageName='Все кроссовки' inputVisible={true}>
              {cards}
        </Content>

       </>
     )
}
export default Home