
import './Drawer.css'

import { useDispatch } from 'react-redux'
import { slideCart } from '../../redux/cartSlice'

const Drawer = props =>{

    const dispatch = useDispatch()

    let stateOfDrawer = 'Drawer'

    if (props.active){
        stateOfDrawer+=' active'
    }
        
    return(
       <div className={stateOfDrawer} onClick={()=>dispatch(slideCart(false))}>
       </div>
     )
}
export default Drawer