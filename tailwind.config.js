import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

export const content = [
  './src/**/*.{html,js,jsx,ts,tsx,css}', // Adjust the path according to your project structure
];
export const theme = {
  extend: {
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-1deg)' },
        '50%': { transform: 'rotate(1deg)' },
      },
      'fade-in-dark': {
        '0%': {
          filter: 'blur(4px) brightness(2)',
        },
        '100%': {
          filter: 'blur(0px) brightness(1)',
        }
      },
      'fade-in': {
        '0%': {
          filter: 'blur(4px) brightness(2)',
        },
        '100%': {
          filter: 'blur(0px) brightness(1)',
        }
      },
    },
    animation: {
      'more-plus': 'bounce 2s infinite',
      'wiggle': 'wiggle 3s ease-in-out infinite',
      'slide-in': 'fade-in 1s ease-in-out forwards',
      'join': 'wiggle 3s ease-in-out infinite'
    }
  },
};
export const plugins = [
  forms,
  typography,
  aspectRatio
];

export const corePlugins = {
  apply: true
}