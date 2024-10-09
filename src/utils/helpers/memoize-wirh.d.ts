export declare const memoizeWith: <T extends (...args: readonly any[]) => any>(
  resolver: (...v: Parameters<T>) => string,
  fn: T
) => T;
