import React from 'react'
import ItemDetailConteiner from '../ItemDetailConteiner/ItemDetailConteiner'
import ItemListConteiner from '../ItemListConteiner/ItemListConteiner'
import {Routes, Route} from "react-router-dom"
import {Cart} from "../Navbar/CartWidget/Cart/Cart"

export const Main = () => {
    return (
        <Routes>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/categoria1' element={<ItemListConteiner />} />
            <Route path='/categoria2' element={<ItemListConteiner />} />
            <Route path='/detalle' element={<ItemDetailConteiner />} />
            <Route path='/home' element={<ItemListConteiner />} />
        </Routes>
    )
}
