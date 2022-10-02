import { Button,Text, DrawerCloseButton,InputGroup,InputLeftAddon, DrawerHeader, DrawerOverlay, Input, DrawerContent, DrawerFooter, DrawerBody, Drawer, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'


export const Payment = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


    return (
         <>
        
        <Button
         padding="24px"
         color="gray"
         onClick={onOpen}
         >Add New Address</Button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>ADD ADDRESS</DrawerHeader>
                    
                    <VStack
                    align={"start"}
                    // border="1px solid black"
                    width={"80%"}
                    paddingX="16px"
                   

                >
                  
                  <Input variant='flushed' placeholder='Pin Code' />
                  <Input variant='flushed' placeholder='City' />
                  <Input variant='flushed' placeholder='State' />
                    

                    <Text fontWeight={"bold"} fontSize="10px" color="#24aeb1">FIRST NAME</Text>
                    <Input variant='flushed' placeholder='Your First name' />

                    <Text fontWeight={"bold"} fontSize="10px" color="#24aeb1">LAST NAME</Text>
                    <Input variant='flushed' placeholder='Address' />
                    <Input variant='flushed' placeholder='Landmark' />
                    <Text fontWeight={"bold"} fontSize="10px" color="#24aeb1">PHONE NUMBER</Text>
                    <InputGroup>
                            <InputLeftAddon children='+91' />
                            <Input type='tel' placeholder='Enter your mobile no' />
                        </InputGroup>
                    </VStack>

                    

                    <DrawerFooter alignSelf={"center"}>
                       
                        <Button paddingX="70px" bg="#24aeb1" color='white'>SAVE ADDRESS</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
