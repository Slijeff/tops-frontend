import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { QueryFormProps } from "../types/QueryFrom";

type Intersection = {
  intersectionid: number;
  intersectionname: string;
};

const QueryForms = ({
    intersection,
    setIntersection,
    mode,
    setMode,
    start,
    setStart,
    end,
    setEnd,
    onQuery,
}: QueryFormProps) => {
  const [intersectionOptions, setIntersectionOptions] = React.useState<Intersection[]>();
  const getIntersection = async () => {
    await axios.get("/intersection/all").then((res) => {
      setIntersectionOptions(res.data.data);
    });
  };
  useEffect(() => {
    getIntersection();
  }, []);

  return (
    <VStack spacing={4}>
      <FormControl>
        <FormLabel>Select Intersection</FormLabel>
        <Select onChange={setIntersection}>
          {intersectionOptions?.map((i: Intersection) => {
            return (
              <option key={i.intersectionid} value={i.intersectionid}>
                {i.intersectionname}
              </option>
            );
          })}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Select Mode</FormLabel>
        <Select onChange={setMode}>
          <option value="history">Historical Mode</option>
          <option value="real">Real-time Mode</option>
        </Select>
      </FormControl>

      {mode === "history" && (
        <FormControl>
          <FormLabel>Start Date</FormLabel>
          <Input value={start} onChange={setStart} />
          <FormHelperText>example: 2018-09-12 14:23:02</FormHelperText>
        </FormControl>
      )}
      {mode === "history" && (
        <FormControl>
          <FormLabel>End Date</FormLabel>
          <Input value={end} onChange={setEnd} />
          <FormHelperText>example: 2018-09-12 14:23:02</FormHelperText>
        </FormControl>
      )}

      <Button colorScheme={"teal"} w={"100%"} onClick={onQuery}>
        Query
      </Button>
    </VStack>
  );
};
export default QueryForms;
