import { Box, Button, VStack, Image, Text, useToast } from '@chakra-ui/react'
import React from 'react';
import { json, Link } from 'react-router-dom';

export const Card = ({ id, name, price, mrp, image }) => {
    const toast = useToast();
    const prodObject = {
        prodId: id,
        prodName: name,
        prodPrice: price,
        prodMrp: mrp,
        prodImage: image
    }
    // console.log(prodObject, "prodObject")
    const handleCartItems = (prodObject) => {
        toast({
            title: 'Added successfully.',
            position: 'top',
            description: "Item added to cart.",
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
        let data = JSON.parse(localStorage.getItem("cart")) || [];
        data.push(prodObject);
        localStorage.setItem("cart", JSON.stringify(data));
    }
    return (
        <Box
            boxSizing="border-box"
            w="100%"
            padding={"20px"}
            rounded="xl"
            overflow={"hidden"}
            // border="1px solid "
            borderColor={"#dddddd"}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        // boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;"


        >
            <VStack align={"start"} >
                <Text
                    bg={"#84be52 "}
                    borderRadius="4px"
                    color="white"
                    fontSize={"10px"}
                    margin="4px"
                    padding={"2px"}

                >15% OFF</Text>
                <Image
                    alignSelf={"center"}
                    // border="1px solid black"
                    width={"50%"}
                    src={image}
                    alt="" />

                <Text paddingLeft={"14px"} fontWeight={"bold"}>{name}</Text>
                <Text paddingLeft={"14px"} fontStyle="italic" fontSize="12px" color="gray">  Mkt: Sun Pharmaceutical Industries Ltd</Text>
                <Text paddingLeft={"14px"} fontWeight={"bold"}> Best price : <span style={{ color: "red", fontSize: "16px" }}> {price} </span> </Text>
                <Text paddingLeft={"14px"} textDecoration={"line-through"} >MRP {mrp}</Text>
                {/* <Link to="/order"> */}
                <Button
                    alignSelf={"center"}
                    justifyContent="center"
                    bg={"#24aeb1"}
                    color="white"
                    paddingX={"50px"}
                    h="32px"
                    onClick={() =>
                        handleCartItems(prodObject)}
                >ADD TO CART</Button>
                {/* </Link> */}


            </VStack>

        </Box>
    )
}
