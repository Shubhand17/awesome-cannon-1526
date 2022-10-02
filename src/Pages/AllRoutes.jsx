import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Components/Home'
import { Address } from './Address'
import { Card } from './Card'
import { Order } from './Order'
import Products from './Products'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path ="/cart" element={<Cart/>}></Route> */}
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/address" element={<Address />}></Route>
        </Routes>

    )
}
