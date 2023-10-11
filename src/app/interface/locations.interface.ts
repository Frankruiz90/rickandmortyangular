import { Info } from './character.intenface';

export interface ApilocationsResponse {
  info: Info;
  results: Location[];
}

export interface Location {
  id?: String;
  name?: String;
  type?: String;
  dimension?: String;
  url?: String;
  created?: String;
}
