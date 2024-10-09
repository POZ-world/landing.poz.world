import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postCssImport from "postcss-import";
import apply from "postcss-apply";

const plugins = {
  plugins: [postCssImport, tailwindcss, autoprefixer, apply],
};

export default plugins;
