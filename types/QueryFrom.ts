import { ChangeEvent } from "react";

export interface QueryFormProps {
  intersection: string;
  setIntersection: (e: ChangeEvent<HTMLSelectElement>) => void;
  mode: string | undefined;
  setMode: (e: ChangeEvent<HTMLSelectElement>) => void;
  start: string | undefined;
  setStart: (e: ChangeEvent<HTMLInputElement>) => void;
  end: string | undefined;
  setEnd: (e: ChangeEvent<HTMLInputElement>) => void;
  onQuery: () => void;
}

export interface Intersection{
  intersectionid: number;
  intersectionname: string;
  longitude: number;
  latitude: number;
}
