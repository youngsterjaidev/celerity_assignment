import React from "react";
import styled from "styled-components";
import { Button } from "../";
import { Link } from "@reach/router"

const Nav = styled.nav`
  padding: 0.5rem 1rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.backgroundColor};
  z-index: 1;

  & > div:nth-of-type(2) {
    display: flex;
    flex-flow: row nowrap;
    gap: 1ch;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;

  & b {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export default () => {
  return (
    <Nav>
      <Logo>
        Ship<b>mate</b>
      </Logo>
      <div>
        <Link to="/book">Book</Link>
        <Button type="button" primary>
          Login
        </Button>
        <Button type="button" secondary>
          Learn More
        </Button>
      </div>
    </Nav>
  );
};
