import { Box, HStack, Image, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
        <Box height={"200px"} width={"100%"} backgroundColor="#32aeb1" >
            <HStack width={"80%"} backgroundColor="#32aeb1" margin={"auto"} gap={"10px"} >
                <Image width={"20%"} src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg" alt="" />
                <InputGroup width={"50%"}>
                    <InputLeftAddon children='Deliver To 112456' />
                    <Input backgroundColor={"white"} type='text' placeholder='Search for wellness and medicine products.... ' />
                </InputGroup>

                <HStack  alignItems={"flex-end"} width={"30%"}  >
                    <HStack  justifyContent={"center"} margin={"auto"} width={"fit-content"} >
                        <Image width={"32%"} src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg" alt="" />
                        <Text color={"white"} >Upload</Text>
                    </HStack>
                    <HStack  justifyContent={"center"} margin={"auto"} width={"fit-content"}>
                        <Image width={"12%"} src="https://i.ibb.co/qFnRs5K/shopping-cart.png" alt="" />
                        <Text color={"white"} >Cart</Text>
                    </HStack>
                    <HStack  justifyContent={"center"} margin={"auto"} width={"fit-content"} >
                        <Image width={"12%"} src="https://i.ibb.co/yW0Wszb/profile-user.png" alt="" />
                        <Text color={"white"} >Sign Up/Sign In</Text>
                    </HStack>
                </HStack>

            </HStack>


            <HStack width={"80%"} margin={"auto"} gap={"10px"} border={"1px solid black"} justifyContent={"center"}>
                <HStack>
                    <Image padding={"5px"} width={"20%"} borderRadius={"50%"} backgroundColor="#41ced0" src="https://i.ibb.co/Y8Rmx27/medicine.png" alt="" />
                    <Text color={"white"} >Medicine</Text>
                </HStack>
                <HStack>
                    <Image padding={"5px"} width={"20%"} borderRadius={"50%"} backgroundColor="#f3428a" src="https://i.ibb.co/JBWQnV1/prescription.png" alt="" />
                    <Text color={"white"} >Wellness</Text>
                </HStack>
                <HStack>
                    <Image padding={"5px"} width={"20%"} borderRadius={"50%"} backgroundColor="#76c334" src="https://i.ibb.co/nsV6vBc/flask.png" alt="" />
                    <Text color={"white"} >Lab Tests</Text>
                </HStack>
                <HStack>
                    <Image padding={"5px"} width={"20%"} borderRadius={"50%"} backgroundColor="#ffb81b" src="https://i.ibb.co/GJgfD5m/perfume.png" alt="" />
                    <Text color={"white"} >Beauty</Text>
                </HStack>
                <HStack>
                    <Image padding={"5px"} width={"20%"} borderRadius={"50%"} backgroundColor="#32aeb1" src="https://i.ibb.co/S5g230Z/health-check.png" alt="" />
                    <Text color={"white"} >Health Corner</Text>
                </HStack>
            </HStack>
        </Box>
    )
}

export default Navbar