import React, { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import cn from "classnames";

const Layout = ({ children }) => {
  const { type } = useContext(ThemeContext);
  return (
    <div
      className={cn("layout", {
        dark: type === "Dark",
      })}
    >{children}</div>
  );
};

export default Layout;
