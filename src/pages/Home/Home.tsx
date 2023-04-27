import React from "react";
import styled from "styled-components";
import { RiShipLine } from "react-icons/ri";
import { BiSupport, BiGlobeAlt, BiRightArrowAlt } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { Navbar, Input, Button, InputWithIcon } from "../../components";

const Main = styled.main``;

const Heading = styled.h1`
  font-style: normal;
  font-weight: 600;
  text-align: center;
  font-size: 2rem;
`;

const Section = styled.section`
  padding: 1rem 3rem;

  @media (max-width: 550px) {
    padding: 1rem 0.8rem;
  }
`;

const ContainerOne = styled(Section)`
  & > div {
    padding: 3rem 1rem;
  }

  & p {
    text-align: center;
    font-style: normal;
    font-weight: 500;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: stretch;
  gap: 1ch;
  border-radius: 0.6rem;
  padding: 1rem;
  background: #ffffff;
  border: 1px solid #f4f4f4;
  box-shadow: 296px 536px 245px rgba(21, 31, 72, 0.01),
    167px 302px 207px rgba(21, 31, 72, 0.05),
    74px 134px 153px rgba(21, 31, 72, 0.09),
    19px 34px 84px rgba(21, 31, 72, 0.1), 0px 0px 0px rgba(21, 31, 72, 0.1);

  & > div {
    flex: 1;
    display: grid;
    place-items: center;
  }

  & > div:nth-of-type(2),
  div:nth-of-type(3),
  div:nth-of-type(4) {
    border-right: 2px solid ${(props) => props.theme.placeholder};
  }

  & > div:nth-of-type(5) {
    min-width: 150px;
  }

  @media (max-width: 550px) {
    & > div:nth-of-type(2),
    div:nth-of-type(3),
    div:nth-of-type(4) {
      border-right: none;
    }
  }
`;

const ContainerTwo = styled(Section)`
  & h2 {
    text-align: center;
  }

  & > div {
    display: flex;
    flex-flow: row wrap;
    gap: 2ch;
  }
`;

const Card = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 0.5rem 1rem;
  background: #ffffff;
  box-shadow: 0px 146px 58px rgba(0, 0, 0, 0.01),
    0px 82px 49px rgba(0, 0, 0, 0.05), 0px 36px 36px rgba(0, 0, 0, 0.09),
    0px 9px 20px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  cursor: pointer;
  border: 1px solid #f4f4f4;

  &:hover {
    box-shadow: none;
  }

  & > div {
    border-bottom: 1px solid ${(props) => props.theme.placeholder};
    display: flex;
    align: center;
    gap: 2ch;

    & > div {
      color: ${(props) => props.theme.primaryColor};
      display: grid;
      place-items: center;
    }
  }

  & > p {
    color: ${(props) => props.theme.placeholder};
    font-weight: 500;
  }
`;

interface Props {
  path: string;
}

export default ({}: Props) => {
  return (
    <>
      <Main>
        <ContainerOne>
          <div>
            <Heading>Hassle-Free Shipping Solutions</Heading>
            <p>
              Compare, book, and manage your freight across the worlds top
              logistics providers, all on one platform.
            </p>
          </div>
          <Form>
            <div>
              <InputWithIcon type="text" placeholder="Origin,Port,City">
                <HiOutlineLocationMarker size={25} />
              </InputWithIcon>
            </div>
            <div>
              <InputWithIcon type="text" placeholder="Destination,Port,City">
                <HiOutlineLocationMarker size={25} />
              </InputWithIcon>
            </div>
            <div>
              <InputWithIcon type="datetime" placeholder="13 April 2023">
                <BsCalendarDate size={25} />
              </InputWithIcon>
            </div>
            <div>
              <InputWithIcon type="text" placeholder="Load">
                <RiShipLine size={28} />
              </InputWithIcon>
            </div>
            <div>
              <Button type="submit" primary>
                <BiRightArrowAlt size={22} />
              </Button>
            </div>
          </Form>
        </ContainerOne>
        <ContainerTwo>
          <h2>Services</h2>
          <div>
            <Card>
              <div>
                <div>
                  <RiShipLine size={28} />
                </div>
                <h3>Freight Services</h3>
              </div>
              <p>
                Open new Opportunites to grow your busniess. Enter new markets
                and discover new contitnents, We are with you, door-to-door.
              </p>
            </Card>
            <Card>
              <div>
                <div>
                  <MdOutlineBusinessCenter size={28} />
                </div>
                <h3>Business Services</h3>
              </div>
              <p>
                We support your goals for growth with cargo insurance, online
                payments and paperless workflow. Take your business to the next
                level.
              </p>
            </Card>
            <Card>
              <div>
                <div>
                  <BiGlobeAlt size={28} />
                </div>
                <h3>Shipping & Logistics</h3>
              </div>
              <p>
                Find powerful solutions to meet your diverse transportation
                needs. Agile solutions to handle all your supply chain needs.
              </p>
            </Card>
            <Card>
              <div>
                <div>
                  <BiSupport size={28} />
                </div>
                <h3>24/7 Support</h3>
              </div>
              <p>
                Receive support from our experts all over the world at every
                stage of the process, 24/7.
              </p>
            </Card>
          </div>
        </ContainerTwo>
      </Main>
    </>
  );
};
