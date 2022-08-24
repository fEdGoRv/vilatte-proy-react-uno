import React from 'react'
import ItemDetailConteiner from '../ItemDetailConteiner/ItemDetailConteiner'
import ItemListConteiner from '../ItemListConteiner/ItemListConteiner'
import {Routes, Route} from "react-router-dom"
import {Cart} from "../Cart/Cart"
import { CheckOut } from '../CheckOut/CheckOut'

export const Main = () => {
    return (
        <Routes>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/categoria/:categoria' element={<ItemListConteiner  />} />
            <Route path='/detalle/:id' element={<ItemDetailConteiner />} />
            <Route path='/' element={<ItemListConteiner />} />
            <Route path='/checkOut' element={<CheckOut />} />
        </Routes>
    )
}
