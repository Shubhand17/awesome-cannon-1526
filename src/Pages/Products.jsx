import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react';
import { Items } from './Items';




const Products = () => {
   
    return (
        <Box width={"100%"} paddingY="20px">
            <Box width={"70%"} margin={"auto"}  alignSelf={"end"}>
                <Items />
            </Box>
        </Box>
    )
}

export default Products;