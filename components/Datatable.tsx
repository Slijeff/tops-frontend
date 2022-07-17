import React from "react";
import {TableContainer, Table, Thead, Th, Tr, Tbody, Td} from "@chakra-ui/react";

const Datatable: React.FC = () => {
    const data = [
        {
            jsontimestamp: "2019010321",
            signalgroup: "1",
            status: "stop",
            endtime: "32492840295"
        },
        {
            jsontimestamp: "2019010322",
            signalgroup: "2",
            status: "Pass",
            endtime: "32492840295"
        },
        {
            jsontimestamp: "2019010323",
            signalgroup: "3",
            status: "stop",
            endtime: "32492840295"
        }
    ]
    return (
        <TableContainer border={"gray.100"} borderWidth={2} rounded={"md"} w={"100%"}>
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
                                <Td>{d.signalgroup}</Td>
                                <Td>{d.status}</Td>
                                <Td>{d.endtime}</Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default Datatable