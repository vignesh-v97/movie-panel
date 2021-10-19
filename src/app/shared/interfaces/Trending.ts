export interface TrendingMovieItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

export interface TrendingSeriesItem {
    id: number;
    overview: string;
    first_air_date: string;
    backdrop_path: string;
    vote_count: number;
    genre_ids: number[];
    vote_average: number;
    original_language: string;
    original_name: string;
    origin_country: string[];
    poster_path: string;
    name: string;
    popularity: number;
    media_type: string;
}

export interface KnownFor {
      adult: boolean;
      backdrop_path: string;
      genre_ids: number[];
      vote_count: number;
      original_language: string;
      original_title: string;
      poster_path: string;
      title: string;
      video: boolean;
      vote_average: number;
      release_date: string;
      overview: string;
      id: number;
      popularity: number;
      media_type: string;
}

  export interface TrendingPeopleItem {
      adult: boolean;
      gender: number;
      name: string;
      id: number;
      known_for: KnownFor[];
      known_for_department: string;
      profile_path: string;
      popularity: number;
      media_type: string;
  }

export interface TrendingResponse<Type> {
  page: number;
  results: Type,
  total_pages:number,
  total_results: number
}
