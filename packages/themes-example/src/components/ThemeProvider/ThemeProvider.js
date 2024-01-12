import React from "react";
import { addStyle } from "../../utils/themes";

const ThemeProvider = ({ children }) => {
  addStyle(`
  :root body[data-theme=green] {
    --base-100: white;
    --primary-100: green;
    --secondary-100: cyan;
    --tertiary-100: black;
  }`);

  addStyle(`
  :root body[data-theme=red] {
    --base-100: black;
    --primary-100: purple;
    --secondary-100: orange;
    --tertiary-100: cyan;
  }`);
  
  return <>{children}</>;
};

export default ThemeProvider;
