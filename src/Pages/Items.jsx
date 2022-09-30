import React from 'react';
import { Grid } from "@chakra-ui/react";


export const Items = () => {
    return (
        <Grid
            p="5"
            paddingTop="15vh"
            w="100%"
            templateColumns={["repeat(4,1fr)"]}
            gap={6}
        >
            <Product />
        </Grid>
    )
}
