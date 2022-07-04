import React, {ChangeEvent, useState} from "react";

export interface QueryFormData {
    intersection: string,
    setIntersection: (e: ChangeEvent<HTMLSelectElement>) => void,
    mode: string | undefined,
    setMode: (e: ChangeEvent<HTMLSelectElement>) => void,
    start: string | undefined,
    setStart: (e: ChangeEvent<HTMLInputElement>) => void,
    end: string | undefined,
    setEnd: (e: ChangeEvent<HTMLInputElement>) => void
}
const useQueryForm = (): QueryFormData => {
    const [intersection, setIntersection] = useState<string>("int1")
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

    return {
        intersection: intersection,
        setIntersection: handleIntersectionChange,
        mode: mode,
        setMode: handleModeChange,
        start: start,
        setStart: handleStartChange,
        end: end,
        setEnd: handleEndChange
    }

}
export default useQueryForm