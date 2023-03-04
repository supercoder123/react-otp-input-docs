import React from "react";

export const OutputWrapper = ({ children }) => {
  return <pre style={{ fontFamily: "inherit" }}>{children}</pre>;
};

export default OutputWrapper;
