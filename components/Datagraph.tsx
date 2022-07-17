import React from "react";
import {Bar, CartesianGrid, XAxis, YAxis, Tooltip, BarChart} from "recharts";
const Datagraph: React.FC = () => {
    const data = [
        {
            jsontimestamp: "2019",
            signalgroup: "1",
            status: "stop",
            endtime: 123
        },
        {
            jsontimestamp: "1323",
            signalgroup: "2",
            status: "Pass",
            endtime: 103
        },
        {
            jsontimestamp: "1234",
            signalgroup: "3",
            status: "stop",
            endtime: 89
        }
    ]
    return (
        <BarChart width={1100} height={300} data={data} style={{paddingBottom: "20px"}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="signalgroup"/>
            <YAxis />
            <Tooltip />
            <Bar dataKey="endtime" fill="#8884d8" />
        </BarChart>
    )
}

export default Datagraph