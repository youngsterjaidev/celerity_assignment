import React from "react";
import styled from "styled-components";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

const Button = styled.button`
    border: none;
    border-radius: 0.7rem;
    font-family: 'Figtree', sans-serif;
    font-weight: 600;
    transition: all 0.5s;

    ${(props) =>
      props.primary &&
      `
        background: ${(props) => props.theme.primary}; 
        color: ${(props) => props.theme.backgroundColor};
        border: 1px solid ${(props) => props.theme.primary};
    `}

    ${(props) =>
      props.secondary &&
      `
        background: ${(props) => props.theme.background}; 
        color: ${(props) => props.theme.textColor}; 
        border: 1px solid ${(props) => props.theme.primary};
    `}

    ${(props) => props.small && ``}

    ${(props) => props.medium && ``}

    ${(props) => props.large && ``}

    &:hover {
        background: ${(props) => props.theme.primaryActive}; 
    }

`;
