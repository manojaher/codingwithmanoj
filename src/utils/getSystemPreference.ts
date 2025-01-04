export const getSystemPreference = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};