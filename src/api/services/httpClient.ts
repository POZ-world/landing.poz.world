export declare type ApiClient = {
  /**
   * Performs a request and resolves a JSON-decoded version of the response body
   */
  jsonRequest<T>(url: string, options?: RequestOptions): Promise<T>;
  /**
   * Performs a request which expects no response body
   */
  emptyRequest(url: string, options?: RequestOptions): Promise<void>;
};

declare type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

declare type OptionalString = string | null | undefined;

export declare type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: string;
  headers?: Record<string, string>;
};
