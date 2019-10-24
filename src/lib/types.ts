export interface Service {
  baseURL: string;
  name: string;
  faviconURL: string;
  link(hash: string): string;
}
