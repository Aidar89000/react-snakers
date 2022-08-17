import Layout from "./components/Layout/Layout"

import Home from "./pages/Home/Home"
import Favorite from './pages/Favorite/Favorite'
import Orders from "./pages/Orders/Orders"


import {Routes, Route} from 'react-router-dom'

const App = props =>{
    return(
       <>
       <Routes>

          <Route path="/" element={<Layout/>}>

            <Route path="home" element={<Home/>}/>
            <Route path="favorite" element={<Favorite/>}/>
            <Route path="orders" element={<Orders/>}/>

          </Route>

       </Routes>

       </>
     )
}

export default App