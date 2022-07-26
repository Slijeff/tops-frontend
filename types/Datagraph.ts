export interface tableData {
    jsontimestamp: string,
    eventstate: string,
    minendtime: number,
    signalgroupid: string,
    intersectionid: number
}

export interface DatagraphProps{
    data: tableData[];
}