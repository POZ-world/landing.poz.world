export const memoizeWith = (resolver, fn) => {
  const cache = {};
  return (...args) => {
    const key = resolver(...args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};
//# sourceMappingURL=index.js.map
