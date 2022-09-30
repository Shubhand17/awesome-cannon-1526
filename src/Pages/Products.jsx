import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Products = () => {
    console.log("working");
    const [data, setData] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        return axios.get("https://netmeds-api-2.onrender.com/products")
            .then((r) => {
                // console.log(r.data);
                setData(r.data);
            }).catch((e) => {
                console.log(e)
            })
    }
    console.log(data, "data")
    return (
        <div>
            Products
        </div>
    )
}

export default Products