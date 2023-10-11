export interface Character {
  id?: String;
  image?: String;
  name?: String;
  status?: String;
  species?: String;
  gender?: String;
  url?: String;
  created?: String;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ApiCharactersResponse {
  info: Info;
  results: Character[];
}
