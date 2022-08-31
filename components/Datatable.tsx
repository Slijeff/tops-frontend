import React from "react";
import { Box } from "@chakra-ui/react";
import { DatatableProps } from "../types/Datatable";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import type {} from "@mui/x-data-grid/themeAugmentation";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Datatable = ({ data }: DatatableProps) => {
  const theme = createTheme({});

  const rows: GridRowsProp = data.map((d, i) => {
    return {
      id: i,
      Timestamp: d.jsontimestamp,
      Movement: d.movement,
      Status: d.eventstate,
      Endtime: d.minendtime,
    };
  });

  const columns: GridColDef[] = [
    { field: "Timestamp", flex: 1, type: "time" },
    { field: "Movement", flex: 1 },
    { field: "Status", flex: 1 },
    { field: "Endtime", headerName: "End time", flex: 1 },
  ];

  return (
    // <Box border={"gray.100"} borderWidth={2} rounded={"md"} w={"100%"} maxH={"45rem"} overflowY={"auto"}>
    //     <Table variant='striped' size={"lg"}>
    //         <Thead>
    //             <Tr>
    //                 <Th>Timestamp</Th>
    //                 <Th>Movement</Th>
    //                 <Th>Status</Th>
    //                 <Th>End time</Th>
    //             </Tr>
    //         </Thead>
    //         <Tbody>
    //             {data.map((d, i) => {
    //                 return (
    //                     <Tr key={i}>
    //                         <Td>{d.jsontimestamp}</Td>
    //                         <Td>{d.movement}</Td>
    //                         <Td>{d.eventstate}</Td>
    //                         <Td>{d.minendtime}</Td>
    //                     </Tr>
    //                 )
    //             })}
    //         </Tbody>
    //     </Table>
    // </Box>
    <ThemeProvider theme={theme}>
      <Box height={"600px"} width={"100%"} rounded={"2xl"}>
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          sx={{
            "& .MuiDataGrid-columnHeaderTitle": { fontWeight: "bold" },
            borderRadius: "10px",
          }}
          disableColumnMenu
        />
      </Box>
    </ThemeProvider>
  );
};

export default Datatable;
