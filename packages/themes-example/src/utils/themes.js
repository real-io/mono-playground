/**
 * Utility function to add CSS in multiple passes.
 * @param {string} styleString
 */
export const addStyle = (styleString) => {
  const style = document.createElement("style");
  style.textContent = styleString;
  document.head.append(style);
}

export const selectTheme = (theme) => {
  document.body.dataset.theme = theme;
};