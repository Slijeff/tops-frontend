import {describe, expect} from "@jest/globals";
import Datatable from "../components/Datatable";
import {render} from "@testing-library/react";

describe("<Datatable/> rendering", () => {
    test("should render Datatable correctly", async () => {
        const data = [{
            jsontimestamp: "2020-08-10 20:32:02.1",
            eventstate: "pass",
            minendtime: "1234",
            signalgroupid: "1",
            intersectionid: 60521
        }]
        const {getByText, container, queryByText} = render(<Datatable data={data}/>);
        expect(container.firstChild).toMatchSnapshot();
        expect(getByText("2020-08-10 20:32:02.1")).toBeTruthy();
        expect(getByText(/pass/i)).toBeTruthy();
        expect(getByText("1")).toBeTruthy();
        expect(queryByText("60521")).toBeFalsy();
    })
})