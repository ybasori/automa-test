export interface IWeather {
  weather: {
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      feels_like: number;
    };
    weather: {
      main: string;
    }[];
  } | null;
  loadingWeather: boolean;
  errorWeather: unknown;
}
