export interface tableDataRaw {
    jsontimestamp: string,
    eventstate: string,
    minendtime: string,
    signalgroupid: string,
    intersectionid: number
}

export interface tableData {
    jsontimestamp: string,
    eventstate: string,
    minendtime: string,
    movement: string,
    intersectionid: number
}

export interface DatatableProps{
    data: tableData[];
}