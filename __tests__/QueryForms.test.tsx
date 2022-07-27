import {describe, expect} from "@jest/globals";
import {fireEvent, render} from "@testing-library/react";
import QueryForms from "../components/QueryForms";

describe("QueryForms rendering", () => {
    test("should render QueryForms correctly", () => {
        const {getByText, container} = render(<QueryForms intersection={"int1"} setIntersection={(e) => {
        }} mode={"history"} setMode={(e) => {
        }} start={"2018-09-12 14:23:02"} setStart={(e) => {
        }} end={"2020-09-12 14:23:02"} setEnd={(e) => {
        }} onQuery={() => {}}/>)

        expect(container.firstChild).toMatchSnapshot()
        expect(getByText(/Historical Mode/i)).toBeTruthy()
        expect(getByText(/Real-time Mode/i)).toBeTruthy()
        expect(getByText(/Start Date/i)).toBeTruthy()
    });

    test("onQuery should fire accurately", () => {
        const handleClick = jest.fn()
        const {getByRole} = render(<QueryForms intersection={"int1"} setIntersection={(e) => {
        }} mode={"history"} setMode={(e) => {
        }} start={"2018-09-12 14:23:02"} setStart={(e) => {
        }} end={"2020-09-12 14:23:02"} setEnd={(e) => {
        }} onQuery={handleClick}/>)
        
        fireEvent.click(getByRole('button'))
        expect(handleClick).toBeCalledTimes(1)

    });
    
})