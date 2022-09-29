import { Box, HStack, Image, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
        <Box paddingY={"8px"} width={"100%"} backgroundColor="#32aeb1" position={"sticky"} top="0" zIndex={"10"} >
            <HStack width={"80%"} backgroundColor="#32aeb1" margin={"auto"} gap={"10px"} >
                <Image width={"15%"} src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg" alt="" />
                <InputGroup width={"50%"}>
                    <InputLeftAddon children='Deliver To 112456' />
                    <Input backgroundColor={"white"} type='text' placeholder='Search for wellness and medicine products.... ' />
                </InputGroup>

                <HStack alignItems={"flex-end"} width={"30%"}  >
                    <HStack justifyContent={"center"} margin={"auto"} width={"fit-content"} >
                        <Image width={"32%"} src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg" alt="" />
                        <Text color={"white"} >Upload</Text>
                    </HStack>
                    <HStack justifyContent={"center"} margin={"auto"} width={"fit-content"}>
                        <Image width={"12%"} src="https://i.ibb.co/qFnRs5K/shopping-cart.png" alt="" />
                        <Text color={"white"} >Cart</Text>
                    </HStack>
                    <HStack justifyContent={"center"} margin={"auto"} width={"fit-content"} >
                        <Image width={"12%"} src="https://i.ibb.co/yW0Wszb/profile-user.png" alt="" />
                        <Text color={"white"} >Sign Up/Sign In</Text>
                    </HStack>
                </HStack>

            </HStack>


        </Box>
    )
}

export default Navbar