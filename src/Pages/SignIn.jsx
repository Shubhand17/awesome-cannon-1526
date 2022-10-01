import { Box, HStack, Input, VStack, Text, Image, InputGroup, Button, InputLeftAddon } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const SignIn = () => {
    return (
        <Box
            paddingY="20px"
            width="70%"
            margin="auto"
            // border="1px solid black"
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
            h="530px"
            borderRadius="14px">

            <HStack align={"start"}
                gap="40px"
            >

                <Image
                    width={'38%'}
                    margin="auto"
                    src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png"
                    alt=""
                />

                <VStack
                    align={"start"}
                    // border="1px solid black"
                    width={"40%"}
                    padding={"60px"}

                >
                    <Text align={"start"} fontWeight={"bold"} fontSize="22px">Sign In / Sign Up</Text>
                    <Text align={"start"} color="gray" fontSize={"16px"}>Sign up or Sign in to access your orders, special offers, health tips and more!</Text>

                    <VStack
                        paddingTop={"40px"}
                        align="start"
                    >

                        <Text fontWeight={"bold"} fontSize="10px" color="#24aeb1">PHONE NUMBER</Text>
                        <InputGroup>
                            <InputLeftAddon children='+91' />
                            <Input type='tel' placeholder='Enter your mobile no' />
                        </InputGroup>

                        <Link to="/signup">
                            <Button
                                marginTop={"50px"}
                                bg="#24aeb1"
                                color="white"
                                w="100%"
                            > USE OTP</Button>
                        </Link>


                    </VStack>


                    <HStack
                        justifyContent={"space-around"}
                        w="260px"
                        display={"flex"}
                        paddingY="60px"
                        align={"center"}
                    >
                        <Box
                            border={"1px solid black"}
                            w="120px"
                            h="40px"

                            borderRadius={"5px"}
                            display="flex"
                            justifyContent={"space-around"}
                            p="6px"
                            color={"gray"}
                            borderColor="gray"
                        >
                            <Image
                                w="20%"
                                src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
                                alt=""

                            />
                            <Text
                                alignSelf={"center"}

                            >Google</Text>

                        </Box>

                        <Box
                            border={"1px solid black"}
                            w="120px"
                            h="40px"

                            borderRadius={"5px"}
                            display="flex"
                            justifyContent={"space-around"}
                            p="6px"
                            color={"gray"}
                            borderColor="gray"
                        >
                            <Image
                                w="30%"
                                src="https://www.bietigheim-bissingen.de/fileadmin/_processed_/e/8/csm_facebook_logog_8093ca380a.png"
                                alt=""

                            />
                            <Text
                                alignSelf={"center"}

                            >Facebook</Text>

                        </Box>
                    </HStack>

                </VStack>



            </HStack>

        </Box>
    )
}
