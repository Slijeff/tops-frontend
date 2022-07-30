import {Center, Heading, HStack, useToast, VStack} from "@chakra-ui/react";
import Head from 'next/head'
import QueryForms from "../components/QueryForms";
import dynamic from "next/dynamic"
import React, {useEffect, useMemo, useState} from 'react'
import Datatable from "../components/Datatable";
import { tableData } from "../types/Datatable";
import axios from "axios";

const Map = dynamic(
    () => import("../components/Map"),
    {ssr: false}
)
const Datagraph = dynamic(
    () => import("../components/Datagraph"),
    {ssr: false}
)

const Home: React.FC = () => {
    const [lon, setLon] = useState<number>(43.0731620)
    const [lat, setLat] = useState<number>(-89.4008362)

    const [intersection, setIntersection] = useState<string>("56072")
    const [mode, setMode] = useState<string | undefined>("history")
    const [start, setStart] = useState<string | undefined>("2021-08-10 20:32:02.1")
    const [end, setEnd] = useState<string | undefined>("2021-08-10 20:32:02.2")
    const [tableData, setTableData] = useState<tableData[]>([])

    const toast = useToast()

    const handleIntersectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setIntersection(e.target.value)
    }
    const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMode(e.target.value)
    }
    const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStart(e.target.value)
    }
    const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEnd(e.target.value)
    }
    const queryHistory = async () => {
        await axios.get(`/rsu/history?start=${start}&end=${end}&id=${intersection}`)
            .then((res) => {
                setTableData(res.data.data)
            }).catch((err) => {
                toast({
                    title: "Error while fetching history data.",
                    isClosable: true,
                    status: "error",
                    position: "top"
                })
            })
    }
    const queryRealtime = async () => {
        await axios.get(`/rsu/realtime?id=${intersection}`)
            .then((res) => {
                setTableData(res.data.data)
            }).catch((err) => {
                toast({
                    title: "Error while fetching realtime data.",
                    isClosable: true,
                    status: "error",
                    position: "top"
                })
            })
    }

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
        // setLon(mapping[intersection][0])
        // setLat(mapping[intersection][1])
        // console.log(intersection)
    }, [intersection, mapping, lon, lat])
    useEffect(() => {
        let interval = setInterval(() => {}, 1000);
        if (mode === "real") {
            interval = setInterval(() => {
                queryRealtime()
            }, 1500)
        } else {
            setTableData([])
        }
        return () => {
            clearInterval(interval)
        }
    }, [mode, intersection])

    return (
        <>
            <Head>
                <meta charSet="UTF-8"></meta>
                <title>City of Madison Smart Corridor Dashboard</title>
            </Head>

            <Center><VStack justifyContent={"center"} mt={8} spacing={8} w={"70vw"} alignItems={"center"}>
                <Heading>City of Madison Smart Corridor Dashboard</Heading>
                <HStack spacing={8} w={"100%"}>
                    <QueryForms
                        intersection={intersection}
                        setIntersection={handleIntersectionChange}
                        mode={mode}
                        setMode={handleModeChange}
                        start={start}
                        setStart={handleStartChange}
                        end={end}
                        setEnd={handleEndChange}
                        onQuery={queryHistory}
                    />
                    <Map lon={lon} lat={lat}/>
                </HStack>
                <Datatable data={tableData}/>
                <Datagraph data={tableData}/>
            </VStack></Center>

        </>
    )
}

export default Home