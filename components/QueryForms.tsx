import {Button, FormControl, FormHelperText, FormLabel, Input, Select, VStack} from "@chakra-ui/react";
import React, {useState} from "react";

const QueryForms: React.FC = () => {
    const [intersection, setIntersection] = useState<string | undefined>()
    const [mode, setMode] = useState<string | undefined>("history")
    const [start, setStart] = useState<string | undefined>("2018-09-12 14:23:02")
    const [end, setEnd] = useState<string | undefined>("2020-09-12 14:23:02")

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


    return (
        <VStack spacing={4}>
            <FormControl>
                <FormLabel>Select Intersection</FormLabel>
                <Select onChange={handleIntersectionChange}>
                    <option value="int1">Park @ University</option>
                    <option value="int2">Park @ Johnson</option>
                    <option value="int3">Park @ Dayton</option>
                    <option value="int4">Park @ Regent</option>
                    <option value="int5">Park @ Braxton</option>
                    <option value="int6">Park @ Vilas Washington</option>
                    <option value="int7">Park @ Erin</option>
                    <option value="int8">Park @ Fish Hatchery</option>
                </Select>
            </FormControl>

            <FormControl>
                <FormLabel>Select Mode</FormLabel>
                <Select onChange={handleModeChange}>
                    <option value="history">Historical Mode</option>
                    <option value="real">Real-time Mode</option>
                </Select>
            </FormControl>

            {mode === 'history' &&
                (
                    <FormControl>
                        <FormLabel>Start Date</FormLabel>
                        <Input value={start} onChange={handleStartChange}/>
                        <FormHelperText>example: 2018-09-12 14:23:02</FormHelperText>
                    </FormControl>
                )}
            {mode === 'history' && (
                <FormControl>
                    <FormLabel>End Date</FormLabel>
                    <Input value={end} onChange={handleEndChange}/>
                    <FormHelperText>example: 2018-09-12 14:23:02</FormHelperText>
                </FormControl>
            )}

            <Button colorScheme={"teal"} w={"100%"}>Query</Button>


        </VStack>


    )
}
export default QueryForms