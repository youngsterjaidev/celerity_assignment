import React from "react";
import styled from "styled-components";

interface Props {}

export const Input = styled.input<Props>`
  width: 100%;
  min-width: 200px;
  border: none;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.backgroundColor};

  &:active,
  &:focus {
    outline: none;
  }
`;
