import React, { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Websolutions`;
  }, []);
};

export default UseTitle;
