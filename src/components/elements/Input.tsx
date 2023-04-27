import React from "react";
import styled from "styled-components";

interface Props {}

const Input = styled.input<Props>`
    width: 100%;
    border: none;
    background-color: ${(props) => props.theme.backgroundColor};
`;
