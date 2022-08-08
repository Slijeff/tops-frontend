import React from "react";
import {Bar, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Cell, Legend} from "recharts";
import { DatatableProps } from "../types/Datatable";
const Datagraph = ({data}: DatatableProps) => {
    const colorMap: {[key: string] : string} = {
        "stop-And-Remain": "#bf2d2a",
        "permissive-Movement-Allowed": "#32a852",
        "protected-Movement-Allowed": "#2d631e"
    }
    return (
        <BarChart width={1100} height={300} data={data} style={{paddingBottom: "20px"}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="movement"/>
            <YAxis />
            <Tooltip />
            <Bar dataKey="minendtime" fill="#8884d8">
                {
                    data.map((entry, index) => {
                        if (entry.eventstate === "stop-And-Remain") {
                            return <Cell key={`cell-${index}`} fill={colorMap["stop-And-Remain"]}></Cell>
                        } else if (entry.eventstate == "permissive-Movement-Allowed"){
                            return <Cell key={`cell-${index}`} fill={colorMap["permissive-Movement-Allowed"]}></Cell>
                        } else if (entry.eventstate == "protected-Movement-Allowed") {
                            return <Cell key={`cell-${index}`} fill={colorMap["protected-Movement-Allowed"]}></Cell>
                        }
                    })
                }
            </Bar>
            <Legend
                payload={
                    [
                        {
                            id: "stop-And-Remain",
                            type: "square",
                            value: "stop-And-Remain",
                            color: colorMap["stop-And-Remain"]
                        },
                        {
                            id: "permissive-Movement-Allowed",
                            type: "square",
                            value: "permissive-Movement-Allowed",
                            color: colorMap["permissive-Movement-Allowed"]
                        },
                        {
                            id: "protected-Movement-Allowed",
                            type: "square",
                            value: "protected-Movement-Allowed",
                            color: colorMap["protected-Movement-Allowed"]
                        },
                    ]
                }
            />
        </BarChart>
    )
}

export default Datagraph