import { Box, Button, VStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Cart = () => {
    return (
        <Box
            boxSizing="border-box"
            w="18%"
            h={"80"}
            rounded="xl"
            overflow={"hidden"}
            border="1px solid "
            borderColor={"#dddddd"}
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
                   border="1px solid black"
                    width={"50%"}
                    src="https://www.netmeds.com/images/product-v1/150x150/390855/volini_gel_75gm_46854_0_2.jpg"
                    alt="" />

                <Text paddingLeft={"14px"} fontWeight={"bold"}> Volini Gel</Text>
                <Text paddingLeft={"14px"} fontStyle="italic" fontSize="12px" color="gray">  Mkt: Sun Pharmaceutical Industries Ltd</Text>
                <Text paddingLeft={"14px"} fontWeight={"bold"}> Best price</Text>
                <Text paddingLeft={"14px"} >MRP Rs.245.00</Text>
                <Button
                    alignSelf={"center"}
                    justifyContent="center"
                    bg={"#24aeb1"}
                    color="white"
                    paddingX={"50px"}
                    h="32px"
                >ADD TO CART</Button>
            </VStack>

        </Box>
    )
}
