import React, { useEffect, useState } from 'react';
import { Box, Grid, SimpleGrid } from "@chakra-ui/react";
import { Card } from './Card';
import axios from 'axios';


export const Items = () => {
    console.log("working");
    const [data, setData] = useState([]);

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = () => {
         axios.get("https://netmeds-api-2.onrender.com/products")
            .then((r) => {
                console.log(r.data)
                setData(r.data)
            }).catch((e) => {
                console.log(e)
            })
    }
    // getProducts();
    console.log(data, "data in items");
    return (
        <Box>
            <SimpleGrid columns={4} spacing={10}>
                {data && data.map((item) => {
                    return <Card key={item.id} name={item.name} price={item.price} mrp={item.mrp} image={item.image} />
                })}
            </SimpleGrid>
        </Box>
    )
}
