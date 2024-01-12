const json = require("./my-custom-theme.json");
const fs = require("fs");

const { tokens, name } = json;

const { colors } = tokens;

const fileString = `:root {
    body[data-theme="${name}"] {
      ${Object.keys(colors)
        .map((key) => `--${key.replace('.', '-')}: ${colors[key]};`)
        .join("\n")}
    }
  }`;



  fs.writeFileSync(`${name}.scss`, fileString);
