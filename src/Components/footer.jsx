import { Box, HStack , Image , Text ,VStack , Heading} from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
   <Box height={"600px"} width={"100%"} border={"1px solid black"}  >
  <HStack gap={"50px"} width={"70%"} align={"start"} margin={"50px 100px"} >
  <Image width={"18%"} src={"https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg"}  alt={""}/>
    <Text color={"gray"} align={"start"} >Netmeds.com is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 7 million happy customers – PAN India.</Text>
   
  </HStack>

  <HStack>

<VStack>
     <Text>Company</Text>   
     <Text>About Netmeds</Text>   
     <Text>Customers Speak</Text>   
     <Text>In The News</Text>   
     <Text>Career</Text>   
     <Text>Terms and Conditions</Text>   
     <Text>Privacy Poloicy</Text>   
     <Text>Fees and Payments Policy</Text>   
     <Text>Shipping and Delivery Policy</Text>   
     <Text>Return , Refund and Cancellation Policy</Text> 
     <Text>Contact</Text>  
</VStack>

<VStack>
    <Text>SHOPPING</Text>
     <Text>Browse by A-Z</Text>   
     <Text>Browse by Manufacturers</Text>   
     <Text>Health Articles</Text>   
     <Text>Offers / Coupons</Text>   
     <Text> FAQs</Text>   
       
</VStack>

<VStack>
    <Text>SOCIAL</Text>
     <Text></Text>   
     <Text></Text>   
     <Text></Text>   
     <Text></Text>   
     <Text></Text>   
     <Text></Text>   
     
</VStack>

<VStack>
     <Text></Text>   
     <Text></Text>   
     <Text></Text>   
     <Text></Text>   
     <Text></Text>   
     <Text></Text>   
     <Text></Text>   
     <Text></Text>   
     <Text></Text>   
     <Text></Text>   
</VStack>
  </HStack>

   </Box>
  )
}
