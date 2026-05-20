import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const eslintConfigNext = require("eslint-config-next");

const config = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "src/hooks/useForm.tsx"],
  },
  ...eslintConfigNext,
];

export default config;
