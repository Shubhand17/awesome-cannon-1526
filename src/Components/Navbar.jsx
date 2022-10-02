import { Box, HStack, Image, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // let data = JSON.parse(localStorage.getItem("cart")) || [];
    // useEffect(() => {
    // }, [JSON.parse(localStorage.getItem("cart")) || []])
    return (
        <Box paddingY={"8px"} width={"100%"} backgroundColor="#32aeb1" position={"sticky"} top="0" zIndex={"10"} >
            <HStack width={"80%"} backgroundColor="#32aeb1" margin={"auto"} gap={"10px"} >
                <Link to="/"> <Image width={"60%"} src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg" alt="" /></Link>
                <InputGroup width={"50%"}>
                    <InputLeftAddon children='Deliver To 112456' />
                    <Input backgroundColor={"white"} type='text' placeholder='Search for wellness and medicine products.... ' />
                </InputGroup>

                <HStack alignItems={"flex-end"} width={"30%"}  >
                    <HStack justifyContent={"center"} margin={"auto"} width={"fit-content"} >
                        <Image width={"32%"} src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg" alt="" />
                        <Text color={"white"} >Upload</Text>
                    </HStack>
                    <Link to="/order">
                        <HStack justifyContent={"center"} margin={"auto"} width={"fit-content"}>
                            <Image width={"12%"} src="https://i.ibb.co/qFnRs5K/shopping-cart.png" alt="" />
                            <Text color={"white"} >Cart</Text>
                            {/* <Text borderRadius={"50%"} fontSize={"14px"} padding="5px" color={"red"} bg={"white"} left="0">{data.length}</Text> */}

                        </HStack>
                    </Link>
                    <Link to="/signin"><HStack justifyContent={"center"} margin={"auto"} width={"fit-content"} >
                        <Image width={"12%"} src="https://i.ibb.co/yW0Wszb/profile-user.png" alt="" />
                        <Text color={"white"} >Sign Up/Sign In</Text>
                    </HStack></Link>
                </HStack>

            </HStack >


        </Box >
    )
}

export default Navbar