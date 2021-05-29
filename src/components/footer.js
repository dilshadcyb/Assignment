import React from "react";
import { Footer } from "./styleSheet";
const footer = (props) => {
  return (
    <div>
      <Footer style={{ textAlign: "center" }}>{props.message}</Footer>
    </div>
  );
};
export default footer;
