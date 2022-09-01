export interface tableData {
  jsontimestamp: string;
  eventstate: string;
  minendtime: string;
  movement: string;
  intersectionid: number;
}

export interface DatagraphProps {
  data: tableData[];
}
