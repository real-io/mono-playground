import { Box } from "../components/Box";
import Button from "../components/Button/Button";
import styles from "./Home.module.scss";
import { selectTheme, addStyle } from "../utils/themes";
import { useState } from "react";

const Home = () => {
  const [showExternalTheme, setShowExternalTheme] = useState(false);

  const loadExternalTheme = async () => {
    const response = await fetch("/external-theme.json");
    const data = await response.json();
    addStyle(`
    :root body[data-theme=${data.name}] {
      ${Object.keys(data.variables).map(key => `${key}: ${data.variables[key]};`).join("\n")}
    }`);
    setShowExternalTheme(true);
  };

  return (
    <div className={styles["home"]}>
      <Box>
        <button
          onClick={() => {
            loadExternalTheme();
          }}
        >
          {" "}
          Load External Theme
        </button>
        <Button
          onClick={() => {
            selectTheme("green");
          }}
        >
          Click Me! Green
        </Button>
        <Button
          onClick={() => {
            selectTheme("red");
          }}
        >
          Click Me! Red
        </Button>
        <Button
          onClick={() => {
            selectTheme("light");
          }}
        >
          Click Me! Light
        </Button>
        <Button
          onClick={() => {
            selectTheme("dark");
          }}
        >
          Click Me! Dark
        </Button>
        {showExternalTheme && (
          <Button
            onClick={() => {
              selectTheme("external");
            }}
          >
            Click Me! External
          </Button>
        )}
      </Box>
    </div>
  );
};

export default Home;
