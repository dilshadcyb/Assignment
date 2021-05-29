import React from "react";
import { Header, HeaderWrapper } from "./styleSheet";
const header = (props) => {
  return (
    <HeaderWrapper>
      <Header> {props.title}</Header>
    </HeaderWrapper>
  );
};

export default header;
