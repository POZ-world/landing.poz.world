import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postCssImport from 'postcss-import';

export default {
  plugins: [
    postCssImport,
    tailwindcss,
    autoprefixer,
    'apply',
  ],
};