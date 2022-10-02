import React from 'react'
import { Box, HStack, Input, ButtonGroup, IconButton, VStack, Text, Image, Button, InputGroup, Heading, Select, useToast } from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons"
import { Payment } from './Payment'
import {  useNavigate } from 'react-router-dom'


export const Address = () => {
    const toast = useToast();
    const navigate = useNavigate();
    return (
        <Box
            paddingY="20px"
            width="70%"
            margin={"auto"}
            // border="1px solid black"
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
            h="530px"
            borderRadius="14px"
            bg="#f6f6f7"
            align="center"

        >
            <Text
                fontSize={"25px"}
                fontWeight="bold"
                padding={"12px"}
                borderRadius="8px"
                bg="#151b39"
                color="white"
                align="start"
            >Order Review</Text>

            <HStack align={"start"}

                marginTop={"40px"}
                marginLeft="50px"
                gap="180px"

            >

                <HStack
                    width={'45%'}
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                    padding="14px"
                    bg="white"
                    borderRadius={"8px"}


                >
                    <VStack align={"start"} bg="white">
                        <Text color="gray" align={"start"}>PRODUCTS</Text>
                        <Text color="gray" align={"start"}>DELIVERY ADDRESS </Text>

                        <ButtonGroup size='sm' isAttached variant='outline'>

                            <IconButton padding="24px" color="#24aeb1" aria-label='Add to friends' icon={<AddIcon />} />
                            {/* <Button padding="24px"color="gray">Add New Address</Button> */}
                            <Payment />
                        </ButtonGroup>


                    </VStack>

                </HStack>

                <VStack
                    align={"start"}
                    // border="1px solid black"
                    width={"30%"}
                    padding={"60px"}
                    borderRadius="8px"
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                    bg="white"

                >
                    <Text align={"start"} fontWeight={"bold"} color="gray" fontSize="20px">PAYMENT DETAILS</Text>


                    <VStack
                        paddingTop={"40px"}
                        align="start"
                    >

                        <Text alignSelf="start">MRP Total : Rs.289.00</Text>
                        <Text align="start">Netmeds Discount : Rs.12.00</Text>
                        <Text alignSelf="start" fontWeight={"bold"}>Total Amount : Rs.277.00</Text>

                        <HStack>
                            <Text fontWeight={"bold"}>Rs.277.00</Text>
                            <Button
                                color={"white"}
                                bg="#24aeb1"
                                onClick={() => {
                                    toast({
                                        position: 'top',
                                        title: 'Order Placed.',
                                        description: "Thank you for Placing order.",
                                        status: 'success',
                                        duration: 2000,
                                        isClosable: true,
                                    })
                                    setTimeout(() => {
                                        navigate("/")
                                    }, 2000)
                                }}
                            >PAY</Button>

                        </HStack>



                    </VStack>




                </VStack>
            </HStack>

            <Text
                marginTop="10px"
                fontSize={"12px"}
                fontStyle="italic"
                color="gray"
            >Netmeds is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personnel to be his agent for delivery of the goods. For details read Terms & Conditions</Text>

        </Box>
    )
}
