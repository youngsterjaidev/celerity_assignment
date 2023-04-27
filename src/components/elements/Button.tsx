import React from "react";
import styled from "styled-components";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

export const Button = styled.button<Props>`
  border: none;
  border-radius: 0.5rem;
  font-family: "Figtree", sans-serif;
  font-weight: 600;
  transition: all 0.5s;
  padding: 0.5rem 1rem;
  cursor: pointer;

  ${(props) => {
    console.log(props);
    return ``;
  }}

  ${(props) =>
    props.primary &&
    `
      background: ${props.theme.primaryColor}; 
      color: ${props.theme.backgroundColor};
      border: 2px solid ${props.theme.primaryColor};

      &:hover {
        background: ${props.theme.primaryActive};
      }
        
    `}

  ${(props) =>
    props.secondary &&
    `
      background: ${props.theme.backgroundColor}; 
      color: ${props.theme.primaryColor}; 
      border: 2px solid ${props.theme.primaryColor};

      &:hover {
        background: ${props.theme.primaryColor};
        color: ${props.theme.backgroundColor};
      }
    `}

    ${(props) => props.small && ``}

    ${(props) => props.medium && ``}

    ${(props) => props.large && ``}

    @media (max-width: 550px) {
    display: block;
    width: 100%;
  }
`;
