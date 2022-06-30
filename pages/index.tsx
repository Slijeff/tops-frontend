import {Center, FormControl, FormLabel, Heading, HStack, Select, Text, VStack} from "@chakra-ui/react";
import Head from 'next/head'
import QueryForms from "../components/QueryForms";
import dynamic from "next/dynamic"
import React from 'react'

const Map = dynamic(() => import("../components/Map"), {loading: ()=><Text>Map is loading</Text>, ssr: false})


const Home: React.FC = () => {
  return (
      <>
        <Head>
            <meta charSet="UTF-8"></meta>
            <title>City of Madison Smart Corridor Dashboard</title>
        </Head>

        <VStack justifyContent={"center"} mt={8} spacing={8}>
            <Heading>City of Madison Smart Corridor Dashboard</Heading>
            <HStack spacing={8}>
                <QueryForms></QueryForms>
                <Map lon={43.0731620} lat={-89.4008362}/>
            </HStack>
        </VStack>
      </>
  )
}

export default Home