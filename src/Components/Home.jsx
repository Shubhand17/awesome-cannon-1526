import { Box, Button, HStack, Image, StackDivider, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { Footer } from './footer';
import { SliderCategories, SliderNewArrivals, SliderTopCompanies } from './Slider';
import { SliderKatrina } from './Slider';


const Home = () => {




    const katrinaSlider = [
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1664256054_Web_Homecc.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1664373768_World-heart-day_Wellness-main-banner.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1661965702_Web_Homekareee.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1661966149_Web_Home.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1654275901_Web_Home_Kareenasdhdh.jpg",
            alt: "",
        },

    ]

    const imageSlider = [
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1658136890_Web-436x224.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1664281433_World-heart-day_Web.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1664111483_Head__Shoulders_Mini_banner_web.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1664111731_Sri_Sri_Tattva_Mini_banner_web.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1663843613_Dr._Vaidyas_Mini_banner_web.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1663913142_Skin-Elements_Mobile_home.jpg",
            alt: "",
        }
    ]


    const imageCategory = [
        {
            image: "https://www.netmeds.com/images/category/3107/thumb/dressing_1.jpg",
            alt: "",
            title: "Dressing"
        },
        {
            image: "https://www.netmeds.com/images/category/501/thumb/family_nutrition_1.jpg",
            alt: "",
            title: "Family Nutrition"
        },
        {
            image: "https://www.netmeds.com/images/category/3141/thumb/respiratory_supplies_1.jpg",
            alt: "",
            title: "Respiratory Supplies"
        },
        {
            image: "https://www.netmeds.com/images/category/3758/thumb/lotions_creams_0.jpg",
            alt: "",
            title: "Lotions & Creams"
        },
        {
            image: "https://www.netmeds.com/images/category/v1/491/thumb/homeopathy_2.jpg",
            alt: "",
            title: "Homeopathy"
        },

    ]


    const imageNewArrival = [
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1664124298_Cannasis_Wellness__mini_banner_for_web.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1664124340_Riyo_Herbs__mini_banner_for_web.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1664124376_WOW__mini_banner_for_web.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1661452980_La-Americana_web.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1661453866_Gizmoswala_web.jpg",
            alt: "",
        },
        {
            image: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1661453937_Broncho_web.jpg",
            alt: "",
        }
    ]

    return (


        <Box backgroundColor={"#f3f7fb"}>

            {/* Navbar */}

            <Box width={"100%"} backgroundColor="#32aeb1" margin={"auto"} paddingY="20px" >
                <HStack width={"80%"} margin={"auto"} gap={"10px"} justifyContent={"space-evenly"}>
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

            <HStack margin={"auto"}  gap={"20px"} justifyContent={"center"} width={"80%"}>
                <Text>COVID Essentials</Text>
                <Text>Diabetes</Text>
                <Text>Eyewear</Text>
                <Text>Ayush</Text>
                <Text>Ayurvedic</Text>
                <Link to="/products">
               <Text>Treatments</Text></Link>
                <Text>Homeopathy</Text>
                <Text>Fitness</Text>
                <Text>Mom & Baby</Text>
                <Text>Devices</Text>
                <Text>Surgicals</Text>
                <Text>Sexual Wellnes</Text>
               
               
              
            </HStack>

            <Box>
                {/* <Image margin={"10px"} src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1664256054_Web_Homecc.jpg' alt='img' /> */}
                <SliderKatrina data={katrinaSlider} />
            </Box>
            <HStack height={"100px"} width={"98%"}  margin={"auto"} justifyContent={"center"} gap={"20px"}>
                <HStack width={"30%"} height={"80px"} boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"} borderRadius={"8px"} gap={'2'} alignItems={"center"}  >
                    <Image marginLeft={"15px"} width={"12%"} src='https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg' />
                    <VStack align={"start"} lineHeight="15px">
                        <Text fontWeight={"bold"} fontSize={"20px"} >Ordrer Medicine</Text>
                        <Text fontWeight={"bold"} color={"#5ea526"} > Save Upto 25% off</Text>
                    </VStack>
                </HStack>
              
                <HStack width={"30%"} height={"80px"} boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"} borderRadius={"8px"} gap={'2'} alignItems={"center"} >
                    <Image marginLeft={"15px"} width={"10%"} src='https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg' />
                    <VStack align={"start"} lineHeight="15px">
                        <Text fontWeight={"bold"} fontSize={"20px"} >Beauty</Text>
                        <Text fontWeight={"bold"} color={"#5ea526"} > Save Upto 40% off</Text>
                    </VStack>
                </HStack>

                <HStack width={"30%"} height={"80px"} boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"} borderRadius={"8px"} gap={'2'} alignItems={"center"} >
                    <Image marginLeft={"15px"} width={"10%"} src='https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg' />
                    <VStack align={"start"} lineHeight="15px">
                        <Text fontWeight={"bold"} fontSize={"20px"} >Wellness</Text>
                        <Text fontWeight={"bold"} color={"#5ea526"} > Flat 50% off</Text>
                    </VStack>
                </HStack>

            </HStack>
<br />
            <Text fontWeight={"bold"} fontSize={"23px"} margin={"15px 30px"} display={"flex"} alignItems={"flex-start"} >  Payment Partner Offers</Text>


            <HStack width={"98%"}  margin={"auto"} justifyContent={"center"} gap={"20px"}>
                <HStack padding={"10px"} gap={"1"} width={"30%"} boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"} borderRadius={"8px"} divider={<StackDivider borderColor={"gray.500"} />}  >
                    <Image width={"8%"} src='https://www.netmeds.com/images/cms/offers/1661958761_Simpl_Icon.png' />
                    <VStack alignItems={"flex-start"}>
                        <Text align={"start"} fontWeight={"bold"} fontSize={"12px"}  > Get up to Rs. 500 Simpl Cashback* (5%)!.. </Text>
                        <Text align={"start"} fontSize={"12px"}  >Get up to Rs.500 Simpl Cashback (5%) on your FIRST-EVER payment via Simpl for ANY purchases* of ANY.. </Text>
                    </VStack>
                </HStack>

                <HStack padding={"10px"} gap={"1"} width={"30%"} boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"} borderRadius={"8px"} divider={<StackDivider borderColor={"gray.500"} />} >
                    <Image width={"8%"} src='https://www.netmeds.com/images/cms/offers/1660838140_twid.png' />
                    <VStack align={"start"}  >
                        <Text align={"start"} fontWeight={"bold"} fontSize={"12px"} >Use Pay with Rewards , Get max. Rs. 1000 Cashback!...</Text>
                        <Text align={"start"} fontSize={"12px"}  >Get Paytm Cashback between max. Rs, 300 and min. Rs. 30 on a minimum purchase of ANY products* worth.</Text>
                    </VStack>
                </HStack>

                <HStack padding={"10px"} gap={"1"} width={"30%"} boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"} borderRadius={"8px"} divider={<StackDivider borderColor={"gray.500"} />}  >
                    <Image width={"8%"} src='https://www.netmeds.com/images/cms/offers/1616682689_paytm.png' />
                    <VStack align={"start"} >
                        <Text align={"start"} fontWeight={"bold"} fontSize={"12px"} >Get up to Rs. 300 Paytm Cashback!.</Text>
                        <Text align={"start"} fontSize={"12px"}  >Get Paytm Cashback between max. Rs, 300 and min. Rs. 30 on a minimum purchase of ANY products* worth.</Text>
                    </VStack>
                </HStack>

            </HStack  >
<br />
            <HStack height={"150px"} width={"100%"} divider={<StackDivider borderColor={"gray.500"} />} >

                <HStack width={"50%"} justifyContent={"space-around"}>
                    <VStack align={"start"}>
                        <Text align={"start"} fontWeight={"bold"} fontSize={"23px"}>Previous Orders</Text>
                        <Text align={"start"}>Your previously ordred products</Text>
                        <HStack>
                            <Text fontWeight={"bold"} color={"#32aeb1"}>View Orders</Text>
                            <Button align={"start"} padding={"4px"} bg={"#32aeb1"} color={"white"} borderRadius={"50%"}> &#x276F; </Button>
                        </HStack>
                    </VStack>

                    <Image width={"14%"} src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg" alt="" />

                </HStack>

                <HStack width={"50%"} justifyContent={"space-around"}  >
                    <VStack align={"start"}>
                        <Text align={"start"} fontWeight={"bold"} fontSize={"23px"}>Beauty Products</Text>
                        <Text align={"start"} color={"#60a845"}>Save Up To 40% off</Text>
                        <Button align={"start"} padding={"4px"} bg={"#32aeb1"} color={"white"}>Explore Beauty</Button>
                    </VStack>

                    <Image width={"20%"} src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/beauty_products.svg" alt="" />
                </HStack>



            </HStack>
            <VStack align={"start"}>
                <Text fontWeight={"600"} fontSize={"24px"} align={"start"} marginLeft={"20px"}> Trending Today</Text>
                <SliderTopCompanies data={imageSlider} />
            </VStack>

            <VStack align={"start"}>
                <Text fontWeight={"600"} fontSize={"24px"} align={"start"} marginLeft={"20px"}> Shop By Category</Text>
                <SliderCategories data={imageCategory} />
            </VStack>

            <VStack align={"start"}>
                <Text fontWeight={"600"} fontSize={"24px"} align={"start"} marginLeft={"20px"}> New Arrival</Text>
                <SliderNewArrivals data={imageNewArrival} />
            </VStack>


        </Box>
       
        
    )
}

export default Home;