import React from "react";
import {Bar, CartesianGrid, XAxis, YAxis, Tooltip, BarChart} from "recharts";
import { DatatableProps } from "../types/Datatable";
const Datagraph = ({data}: DatatableProps) => {
    return (
        <BarChart width={1100} height={300} data={data} style={{paddingBottom: "20px"}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="signalgroupid"/>
            <YAxis />
            <Tooltip />
            <Bar dataKey="minendtime" fill="#8884d8" />
        </BarChart>
    )
}

export default Datagraph