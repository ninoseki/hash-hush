export interface Service {
  baseURL: string;
  name: string;
  faviconURL: string;
  checkable: boolean;
  link(hash: string): string;
}

export type StatusType = "Found" | "Not found" | "Unknown";
