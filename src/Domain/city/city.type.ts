export interface ICity {
  city: { lat: number; lng: number; name: string } | null;
  loadingCity: boolean;
  errorCity: unknown;
}
