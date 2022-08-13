import { Center, Heading, HStack, useToast, VStack } from "@chakra-ui/react";
import Head from "next/head";
import QueryForms from "../components/QueryForms";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useState } from "react";
import Datatable from "../components/Datatable";
import { tableData, tableDataRaw } from "../types/Datatable";
import axios from "axios";

const Map = dynamic(() => import("../components/Map"), { ssr: false });
const Datagraph = dynamic(() => import("../components/Datagraph"), {
  ssr: false,
});

const Home: React.FC = () => {
  const [coord, setCoord] = useState<number[]>([43.073162, -89.4008362]);

  const [intersection, setIntersection] = useState<string>("56072");
  const [mode, setMode] = useState<string | undefined>("real");
  const [start, setStart] = useState<string | undefined>(
    "2021-08-10 20:32:02.1"
  );
  const [end, setEnd] = useState<string | undefined>("2021-08-10 20:32:02.2");
  const [tableData, setTableData] = useState<tableData[]>([]);

  const toast = useToast();

  const handleIntersectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCoord([
      Number(e.target.selectedOptions.item(0)?.getAttribute("data-lat")),
      Number(e.target.selectedOptions.item(0)?.getAttribute("data-lon")),
    ]);
    setIntersection(e.target.value);
  };
  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(e.target.value);
  };
  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStart(e.target.value);
  };
  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnd(e.target.value);
  };
  const queryHistory = async () => {
    await axios
      .get(`/rsu/history?start=${start}&end=${end}&id=${intersection}`)
      .then((res) => {
        setTableData(res.data.data);
      })
      .catch((err) => {
        toast({
          title: "Error while fetching history data.",
          isClosable: true,
          status: "error",
          position: "top",
        });
      });
  };
  const queryRealtime = async () => {
    await axios
      .get(`/rsu/realtime?id=${intersection}`)
      .then((res) => {
        setTableData(res.data.data);
      })
      .catch((err) => {
        toast({
          title: "Error while fetching realtime data.",
          isClosable: true,
          status: "error",
          position: "top",
        });
      });
  };
  useEffect(() => {
    let interval = setInterval(() => {}, 1000);
    if (mode === "real") {
      interval = setInterval(() => {
        queryRealtime();
      }, 1500);
    } else {
      setTableData([]);
    }
    return () => {
      clearInterval(interval);
    };
  }, [mode, intersection]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <title>City of Madison Smart Corridor Dashboard</title>
      </Head>

      <Center>
        <VStack
          justifyContent={"center"}
          mt={8}
          spacing={8}
          w={"70vw"}
          alignItems={"center"}
        >
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
            <Map lon={coord[0]} lat={coord[1]} />
          </HStack>
          <Datatable data={tableData} />
          <Datagraph data={tableData} />
        </VStack>
      </Center>
    </>
  );
};

export default Home;
