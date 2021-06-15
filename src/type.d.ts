interface IMovieData {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
}

interface IApiResponse {
  page: number;
  results: IMovieData[];
}

type BackdropSizes = "w300" | "w780" | "w1280" | "original";

type PosterSizes =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";

interface IApiConfig {
  images: {
    base_url: string;
    backdrop_sizes: BackdropSizes[];
    poster_sizes: PosterSizes[];
  };
}

type ApiMoviesParams = string | (() => string | null);

type ApiMoviesResponse = [IMovieData[], any, boolean];

type MovieDetailParams = { id: string };

type MovieDetailState = { state: IMovieData };

interface IMovieDataProps {
  movie: IMovieData;
}

interface ISearchResultsHeader {
  isLoading: boolean;
  isEmpty: boolean;
}
