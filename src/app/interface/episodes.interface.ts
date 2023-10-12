import { Info } from './character.intenface';

export interface ApiEpisodesResponse {
  info: Info;
  results: Episodes[];
}

export interface Episodes {
  id?: String;
  name?: String;
  air_date?: String;
  episode?: String;
  url?: String;
  created?: String;
}
