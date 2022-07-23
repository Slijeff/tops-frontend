export interface tableData {
    jsontimestamp: string,
    eventstate: string,
    minendtime: string,
    signalgroupid: string,
    intersectionid: number
}

export interface DatatableProps{
    data: tableData[];
}