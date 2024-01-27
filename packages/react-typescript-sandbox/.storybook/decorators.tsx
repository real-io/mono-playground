import { Decorator } from "@storybook/react";
import React, { CSSProperties } from "react";

export const withMaxWidth: Decorator = (Story) => {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", display: "flex", justifyContent: "center" }}>
      <Story />
    </div>
  );
};

export const withBorder: Decorator = (Story) => {
 return ( <div style={{border: "3px dashed red"}}>
    <Story />
  </div>)
}

export const withTheme: Decorator = (Story) => {
  return ( <div style={{"--button-primary": "orange"} as CSSProperties}>
     <Story />
   </div>)
 }

export const globalDecorators = [];
