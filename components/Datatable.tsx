import React from "react";
import { Box, Badge, Text } from "@chakra-ui/react";
import { DatatableProps } from "../types/Datatable";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
  GridCellParams,
} from "@mui/x-data-grid";
import type {} from "@mui/x-data-grid/themeAugmentation";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NoRowsDisaply from "./NoRowsDisplay";

const Datatable = ({ data, mode }: DatatableProps) => {
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
    { field: "Timestamp", flex: 1 },
    { field: "Movement", flex: 1 },
    { field: "Status", flex: 1 },
    { field: "Endtime", headerName: "End time", flex: 1 },
  ];

  return (
    <>
      {mode === "real" && (
        <>
          <Text fontSize={"xl"} fontWeight="bold">
            Record Timestamp:
          </Text>
          <Badge fontSize={"2em"} colorScheme="gray" rounded={"lg"}>
            {data[0] != undefined && data[0].jsontimestamp}
          </Badge>
        </>
      )}

      <ThemeProvider theme={theme}>
        <Box height={"600px"} width={"100%"} rounded={"2xl"}>
          <DataGrid
            rows={rows}
            columns={columns}
            components={{ Toolbar: GridToolbar, NoRowsOverlay: NoRowsDisaply }}
            sx={{
              "& .MuiDataGrid-columnHeaderTitle": { fontWeight: "bold" },
              borderRadius: "10px",
              "& .stop": { color: "#F56565" },
              "& .perm": { color: "#48BB78" },
              "& .prot": { color: "#2F855A" },
              "& .unkown": { color: "#A0AEC0" },
            }}
            disableColumnMenu
            getCellClassName={(params: GridCellParams<string>) => {
              if (params.value === "stop-And-Remain") {
                return "stop";
              } else if (params.value === "permissive-Movement-Allowed") {
                return "perm";
              } else if (params.value === "protected-Movement-Allowed") {
                return "prot";
              } else if (params.field === "Status") {
                return "unkown";
              }
              return "";
            }}
            columnVisibilityModel={{
              Timestamp: mode !== "real",
            }}
          />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Datatable;
