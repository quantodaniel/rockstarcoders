import { useMemo } from "react";
import useSWR from "swr";
import { useQueryParams } from "../utils";

const getApiEndpoint = (service: string, params = "") => {
  return `https://api.themoviedb.org/3/${service}?api_key=3c248a33ad701fa3a2d07545379383c9${params}`;
};

export const useConfig = (): IApiConfig | undefined => {
  const { data } = useSWR<IApiConfig>(getApiEndpoint("configuration"));
  return data;
};

const useGetMovies = (path: ApiMoviesParams): ApiMoviesResponse => {
  const { data, error, isValidating } = useSWR<IApiResponse>(path);

  const movies = useMemo(() => {
    return data?.results || [];
  }, [data]);

  return [movies, error, isValidating];
};

export const usePopularMovies = (): ApiMoviesResponse => {
  return useGetMovies(getApiEndpoint("discover/movie"));
};

const ratings = [0, 2, 4, 6, 8];
export const useSearchMovies = (query: string): ApiMoviesResponse => {
  const params = useQueryParams();

  const [movies, error, isLoading] = useGetMovies(() =>
    query ? getApiEndpoint("search/movie", `&query=${query}`) : null
  );

  const filteredMovies = useMemo(() => {
    const ratingFilter = Number(params.getRating());
    if (ratingFilter) {
      return movies.filter(
        (movie) => movie.vote_average >= ratings[ratingFilter - 1]
      );
    }
    return movies;
  }, [movies, params]);

  return [filteredMovies, error, isLoading];
};

export const useImageUrl = (
  path: string,
  size: PosterSizes | BackdropSizes,
  defaultImage = "/backdrop.png"
): string => {
  const config = useConfig();

  const currentPath = useMemo(() => {
    if (config?.images.base_url) {
      return `${config.images.base_url}${size}/${path}`;
    }
  }, [config?.images, path, size]);

  return !!path && !!currentPath ? currentPath : defaultImage;
};

export const usePosterImage = (path: string, size: PosterSizes) => {
  return useImageUrl(path, size, "/poster.png");
};

export const useBackdropImage = (path: string, size: BackdropSizes) => {
  return useImageUrl(path, size, "/backdrop.png");
};
