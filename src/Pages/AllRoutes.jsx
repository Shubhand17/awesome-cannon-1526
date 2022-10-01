import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Components/Home'
import { Card } from './Card'
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
        </Routes>

    )
}
