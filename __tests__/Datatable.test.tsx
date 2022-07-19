import {describe, expect} from "@jest/globals";
import Datatable from "../components/Datatable";
import {render} from "@testing-library/react";

describe("<Datatable/> rendering", () => {
    test("should render Datatable correctly", async () => {
        const {getByText, container, getAllByText} = render(<Datatable/>);
        expect(container.firstChild).toMatchSnapshot();
        expect(getByText("2019010321")).toBeTruthy();
        expect(getAllByText(/stop/i)).toBeTruthy();
        expect(getByText(/pass/i)).toBeTruthy();
        expect(getByText("1")).toBeTruthy();
    })
})