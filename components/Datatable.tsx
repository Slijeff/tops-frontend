import React from "react";
import {TableContainer as Box, Table, Thead, Th, Tr, Tbody, Td} from "@chakra-ui/react";
import { DatatableProps } from "../types/Datatable";

const Datatable = ({data}: DatatableProps) => {
    
    return (
        <Box border={"gray.100"} borderWidth={2} rounded={"md"} w={"100%"} maxH={"45rem"} overflowY={"auto"}>
            <Table variant='striped' size={"lg"}>
                <Thead>
                    <Tr>
                        <Th>Timestamp</Th>
                        <Th>Signal Group</Th>
                        <Th>Status</Th>
                        <Th>End time</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((d, i) => {
                        return (
                            <Tr key={i}>
                                <Td>{d.jsontimestamp}</Td>
                                <Td>{d.signalgroupid}</Td>
                                <Td>{d.eventstate}</Td>
                                <Td>{d.minendtime}</Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </Box>
        
    )
}

export default Datatable