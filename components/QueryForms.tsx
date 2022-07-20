import {Button, FormControl, FormHelperText, FormLabel, Input, Select, VStack} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import {QueryFormData} from "../hooks/useQueryForm";

type Intersection = {
    intersectionid: number,
    intersectionname: string
}
const QueryForms: React.FC<QueryFormData> = (Q) => {

    const [intersection, setIntersection] = React.useState<Intersection[]>()
    const getIntersection = async () => {
        await axios.get("/intersection/all")
            .then(res => {
                setIntersection(res.data.data)
            })
    }
    useEffect(() => {
        getIntersection()
    }, [])

    return (
        <VStack spacing={4}>
            <FormControl>
                <FormLabel>Select Intersection</FormLabel>
                <Select onChange={Q.setIntersection}>
                    {intersection?.map((i: Intersection) => {
                        return (<option key={i.intersectionid} value={i.intersectionid}>{i.intersectionname}</option>)
                    })}
                    {/* <option value="int1">Park @ University</option>
                    <option value="int2">Park @ Johnson</option>
                    <option value="int3">Park @ Dayton</option>
                    <option value="int4">Park @ Regent</option>
                    <option value="int5">Park @ Braxton</option>
                    <option value="int6">Park @ Vilas Washington</option>
                    <option value="int7">Park @ Erin</option>
                    <option value="int8">Park @ Fish Hatchery</option> */}
                </Select>
            </FormControl>

            <FormControl>
                <FormLabel>Select Mode</FormLabel>
                <Select onChange={Q.setMode}>
                    <option value="history">Historical Mode</option>
                    <option value="real">Real-time Mode</option>
                </Select>
            </FormControl>

            {Q.mode === 'history' &&
                (
                    <FormControl>
                        <FormLabel>Start Date</FormLabel>
                        <Input value={Q.start} onChange={Q.setStart}/>
                        <FormHelperText>example: 2018-09-12 14:23:02</FormHelperText>
                    </FormControl>
                )}
            {Q.mode === 'history' && (
                <FormControl>
                    <FormLabel>End Date</FormLabel>
                    <Input value={Q.end} onChange={Q.setEnd}/>
                    <FormHelperText>example: 2018-09-12 14:23:02</FormHelperText>
                </FormControl>
            )}

            <Button colorScheme={"teal"} w={"100%"}>Query</Button>


        </VStack>


    )
}
export default QueryForms