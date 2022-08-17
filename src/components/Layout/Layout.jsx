import {Outlet} from 'react-router-dom'
import Header from '../Header/Header'

import classes from './Layout.module.css'

import {useSelector, useDispatch} from 'react-redux'
import Cart from '../Cart/Cart'
import Drawer from '../Drawer/Drawer'


const Layout = props =>{
    return(
       <div className={classes['main-board']}>
       
        <Header/>

        <main>
          <Outlet></Outlet>
          {useSelector(state=> 
            
           <>
              <Drawer active={state.cartState.slide}/>
              <Cart active={state.cartState.slide}/>
           </> 

          
          )}
          {props.children}
        </main>

       </div>
     )
}
export default Layout