import chroma from 'chroma-js';

export const truncateName = (name, maxLength) => {
  if (name.length <= maxLength) return name;
  return `${name.substring(0, maxLength)}...`;
};

export const isBackgroundLight = (background) => {
  return chroma(background).luminance() >= 0.5;
}