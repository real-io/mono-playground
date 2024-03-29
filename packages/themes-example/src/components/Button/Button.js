import React from "react";
import styles from './Button.module.scss';

/**
 *
 * @returns
 */
const Button = ({ children, ...props }) => {
  return <button className={styles["button"]} {...props}>{children}</button>;
};

export default Button;
