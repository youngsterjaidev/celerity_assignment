import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.2rem;
`;

const Items = styled.div`
  display: grid;
  place-items: center;

  & > div:nth-child(odd) {
    position: relative;

    & > div:nth-of-type(1) {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: ${(props) => props.theme.primaryFade};
      color: ${(props) => props.theme.backgroundColor};
    }

    & > div:nth-of-type(2) {
      position: absolute;
      bottom: -3rem;
    }
  }

  &:nth-child(even) {
    flex: 1;
  }

  &:nth-child(even) > div {
    height: 3px;
    width: 100%;
    background: ${(props) => props.theme.primaryFade};
  }
`;

export default () => {
  return (
    <Container>
      <Items>
        <div>
          <div>1</div>
          <div>Search</div>
        </div>
      </Items>
      <Items>
        <div></div>
      </Items>
      <Items>
        <div>
          <div>2</div>
          <div>Recommended Services</div>
        </div>
      </Items>
      <Items>
        <div></div>
      </Items>
      <Items>
        <div>
          <div>3</div>
          <div>Result</div>
        </div>
      </Items>
      <Items>
        <div></div>
      </Items>
      <Items>
        <div>
          <div>4</div>
          <div>Booking</div>
        </div>
      </Items>
    </Container>
  );
};
