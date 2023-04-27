import React from "react";
import styled from "styled-components";
import { Button } from "../";

const Nav = styled.nav``;

export default () => {
  return (
    <Nav>
      <div></div>
      <div>
        <Button type="button">Login</Button>
        <Button type="button">Learn More</Button>
      </div>
    </Nav>
  );
};
