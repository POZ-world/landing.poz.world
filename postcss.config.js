import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postCssImport from "postcss-import";

const plugins = {
  plugins: [postCssImport, tailwindcss, autoprefixer, "apply"],
};

export default plugins;
