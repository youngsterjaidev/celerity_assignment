import React from "react";
import styled from "styled-components";
import { Ri24HoursFill } from "react-icons/ri";
import { Input } from "../elements/Input";

const Container = styled.div`
  background: red;
  position: relative;

  & > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    color: ${(props) => props.theme.placeholder};
    display: grid;
    place-items: center;
  }
`;

const MyInput = styled(Input)`
  padding-left: 2rem;
`;

interface Props {
  type: string;
  placeholder: string;
  children?: any;
}

export default ({ children, type, placeholder }: Props) => {
  return (
    <Container>
      <MyInput type={type} placeholder={placeholder} />
      <div>{children}</div>
    </Container>
  );
};
