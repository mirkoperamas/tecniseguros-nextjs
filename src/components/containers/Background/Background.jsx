import classes from "./background.module.scss";

export const Background = ({ children }) => {
  return <div className={classes.background}>{children}</div>;
};
