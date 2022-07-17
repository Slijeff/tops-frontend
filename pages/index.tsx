import {Center, Heading, HStack, VStack} from "@chakra-ui/react";
import Head from 'next/head'
import QueryForms from "../components/QueryForms";
import dynamic from "next/dynamic"
import React, {useEffect, useMemo, useState} from 'react'
import useQueryForm from "../hooks/useQueryForm";
import Datatable from "../components/Datatable";
import Datagraph from "../components/Datagraph";

const Map = dynamic(
    () => import("../components/Map"),
    {ssr: false}
)

const Home: React.FC = () => {
    const [lon, setLon] = useState<number>(43.0731620)
    const [lat, setLat] = useState<number>(-89.4008362)

    const {
        intersection,
        setIntersection,
        mode,
        setMode,
        start,
        setStart,
        end,
        setEnd
    } = useQueryForm()

    const mapping = useMemo((): { [key: string]: any } => ({
        int1: [43.0731620, -89.4008362],
        int2: [43.0719845, -89.4010049],
        int3: [43.0710540, -89.4010191],
        int4: [43.0675372, -89.4011519],
        int5: [43.0662784, -89.4009186],
        int6: [43.0630362, -89.4008103],
        int7: [43.0599770, -89.4010300],
        int8: [43.0565368, -89.3990862],
    }), [])
    useEffect(() => {
        setLon(mapping[intersection][0])
        setLat(mapping[intersection][1])
    }, [intersection, mapping, lon, lat])

    return (
        <>
            <Head>
                <meta charSet="UTF-8"></meta>
                <title>City of Madison Smart Corridor Dashboard</title>
            </Head>

            <Center><VStack justifyContent={"center"} mt={8} spacing={8} w={"60vw"} alignItems={"center"}>
                <Heading>City of Madison Smart Corridor Dashboard</Heading>
                <HStack spacing={8} w={"100%"}>
                    <QueryForms
                        intersection={intersection}
                        setIntersection={setIntersection}
                        mode={mode}
                        setMode={setMode}
                        start={start}
                        setStart={setStart}
                        end={end}
                        setEnd={setEnd}
                    />
                    <Map lon={lon} lat={lat}/>
                </HStack>
                <Datatable/>
                <Datagraph/>
            </VStack></Center>

        </>
    )
}

export default Home