import { Box, HStack, Input, VStack, Text, Image, InputGroup, Button, InputLeftAddon, PinInputField, PinInput } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { Payment } from './Payment';


export const SignUp = () => {

    const [otp1, setOtp1] = React.useState("");
    const [otp2, setOtp2] = React.useState("");
    const [otp3, setOtp3] = React.useState("");
    const [otp4, setOtp4] = React.useState("");
    const [otp5, setOtp5] = React.useState("");
    const [otp6, setOtp6] = React.useState("");

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
                    <Text align={"start"} fontWeight={"bold"} fontSize="22px">Create Account</Text>

                    <Text fontWeight={"bold"} fontSize="10px" color="#24aeb1">EMAIL ID</Text>
                    <Input variant='flushed' placeholder='Enter your email ddress' />

                    <Text fontWeight={"bold"} fontSize="10px" color="#24aeb1">FIRST NAME</Text>
                    <Input variant='flushed' placeholder='Your First name' />

                    <Text fontWeight={"bold"} fontSize="10px" color="#24aeb1">LAST NAME</Text>
                    <Input variant='flushed' placeholder='Your Last Name' />

                    <Text fontWeight={"bold"} fontSize="10px" color={"gray"} >VERIFYING NUMBER</Text>

                    <HStack> <PinInput>
                        <PinInputField onChange={(e) => setOtp1(e.target.value)} />
                        <PinInputField onChange={(e) => setOtp2(e.target.value)} />
                        <PinInputField onChange={(e) => setOtp3(e.target.value)} />
                        <PinInputField onChange={(e) => setOtp4(e.target.value)} />
                        <PinInputField onChange={(e) => setOtp5(e.target.value)} />
                        <PinInputField onChange={(e) => setOtp6(e.target.value)} />
                    </PinInput> </HStack>
                    <Link to="/">

                        <Button
                            marginTop={"50px"}
                            bg="#24aeb1"
                            color="white"
                            w="100%"
                        > VERIFY</Button>
                       

                    </Link>





                </VStack>



            </HStack>

            <Text textAlign="center"
                color={"gray"}
                fontSize="14px">
                By continuing you agree to our Terms of service <br></br>
                and Privacy & Legal Policy.
            </Text>

        </Box>
    )
}
