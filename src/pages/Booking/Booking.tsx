import React from "react";
import styled from "styled-components";
import { BookingGuide, Button } from "../../components";

interface Props {
  path: string;
}

const Section = styled.section``;

const ContainerOne = styled(Section)`
  padding: 1rem 15rem;
`;

const ContainerTwo = styled(Section)`
  padding: 5rem 3rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 2ch;
`;

const BookingDetails = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-auto-rows: minmax(100px, 1fr);
  gap: 2ch;

  & > div {
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.backgroundColor};
    box-shadow: 0px 196px 78px rgba(21, 31, 72, 0.01),
      0px 110px 66px rgba(21, 31, 72, 0.05),
      0px 49px 49px rgba(21, 31, 72, 0.09), 0px 12px 27px rgba(21, 31, 72, 0.1),
      0px 0px 0px rgba(21, 31, 72, 0.1);
    border-radius: 14px;
  }

  & > div:nth-of-type(1) {
    grid-column: 1/5;
  }

  & > div:nth-of-type(2) {
  }

  & > div:nth-of-type(3) {
    grid-column: 2/5;
  }

  & > div:nth-of-type(4) {
    grid-column: 1/3;
  }

  & > div:nth-of-type(5) {
    grid-column: 3/5;
  }

  @media (max-width: 550px) {
    display: block;
  }
`;

const Checkout = styled.div`
  flex: 1;
  padding: 1rem;
  background: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 196px 78px rgba(21, 31, 72, 0.01),
    0px 110px 66px rgba(21, 31, 72, 0.05), 0px 49px 49px rgba(21, 31, 72, 0.09),
    0px 12px 27px rgba(21, 31, 72, 0.1), 0px 0px 0px rgba(21, 31, 72, 0.1);
  border-radius: 14px;
  color: ${(props) => props.theme.placeholder};
`;

const CheckoutItem = styled.div`
  padding: 1rem 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.placeholder};

  & > div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  &:first-child {
    color: ${(props) => props.theme.textColor};

    & > div {
      justify-content: flex-start;
      gap: 1ch;
    }
  }

  &:last-child {
    border: none;
  }
`;

const CheckoutBtn = styled(Button)`
  width: 100%;
  display: block;
`;

export default ({}: Props) => {
  return (
    <div>
      <ContainerOne>
        <BookingGuide />
      </ContainerOne>
      <ContainerTwo>
        <BookingDetails>
          <div>
            <h4>Booking Summary</h4>
            <div></div>
          </div>
          <div>
            <h4>Total Weight/Volumne</h4>
          </div>
          <div>
            <h4>Load</h4>
          </div>
          <div>
            <h4>Seller: Primetime WorldWide</h4>
          </div>
          <div>
            <h4>Insurance:Xcover.com</h4>
          </div>
        </BookingDetails>
        <Checkout>
          <CheckoutItem>
            <div>
              <h3>Price Details</h3>
              <div>known shipper</div>
            </div>
          </CheckoutItem>
          <CheckoutItem>
            <div>
              <div>Seller's Quote</div>
              <div>$3,456.25</div>
            </div>
          </CheckoutItem>
          <CheckoutItem>
            <div>
              <div>Duties and Taxes</div>
              <div>Not Included</div>
            </div>
            <div>
              <div>Insurance</div>
              <div>$323.40</div>
            </div>
            <div>
              <div>Based on items cost</div>
            </div>
          </CheckoutItem>
          <CheckoutItem>
            <div>
              <div>Add a promo code</div>
            </div>
            <div>
              <div>Plateform fee</div>
              <div>$119.48</div>
            </div>
          </CheckoutItem>
          <CheckoutItem>
            <div>
              <h2>Total:</h2>
              <h2>$4,102.13</h2>
            </div>
            <CheckoutBtn type="button" primary>
              Checkout
            </CheckoutBtn>
          </CheckoutItem>
        </Checkout>
      </ContainerTwo>
    </div>
  );
};
