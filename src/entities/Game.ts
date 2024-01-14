import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  background_image: string;
  description_raw: string;
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
}
