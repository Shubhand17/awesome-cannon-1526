import { Box, HStack, Input, VStack, Text, Image, InputGroup, Button, Heading, Select } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Order = () => {
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
            <Heading>Order Summary</Heading>

            <HStack align={"start"}
               
                marginTop={"40px"}
                marginLeft="50px"
                gap="180px"
              
            >

                <HStack
                    width={'32%'}
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                    // border="1px solid black"
                    height={"300px"}
                    bg="white"
                    borderRadius={"8px"}
                    
                    
                >
                    <Image
                        src="https://www.netmeds.com/images/product-v1/150x150/14020/vicks_vaporub_25_ml_0.jpg"

                        alt=""
                    />
                    <VStack align={"start"} bg="white">
                        <Text align={"start"}>Abzorb Dusting Powder 50gm</Text>
                        <Text color={"gray"} fontStyle="italic" align={"start"}>Mfr: Sun Pharmaceutical Industries Ltd</Text>
                        <Text align={"start"} fontWeight={"bold"} color="red">Rs.68.00</Text>
                        <Text fontSize={"14px"} color="gray" align={"start"}>Delivery between OCTOBER 4-OCTOBER 5</Text>
                        <Select outline={"none"} width={"80px"} placeholder='Qty:1'>
                            <option value='option1'>1</option>
                            <option value='option2'> 2</option>
                            <option value='option3'> 3</option>
                        </Select>

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

                        <Text  alignSelf="start">MRP Total : Rs.80.00</Text>
                        <Text  align="start">Netmeds Discount : Rs.12.00</Text>
                        <Text  alignSelf="start"fontWeight={"bold"}>Total Amount : Rs.68.00</Text>

                        <HStack>
                            <Text fontWeight={"bold"}>Rs.68.00</Text>
                            <Button
                            color={"white"}
                            bg="#24aeb1"
                            >PROCEED</Button>
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
