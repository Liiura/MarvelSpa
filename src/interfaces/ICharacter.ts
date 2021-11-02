import { IComic } from "./IComic";
import { IThumbnail } from "./IThumbnail";

export interface ICharacter {
  id:number,
  name: string,
  description: string,
  modified: string,
  thumbnail: IThumbnail,
  resourceURI: string,
  comics: IComic
}
