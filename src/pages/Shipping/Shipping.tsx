import React from "react";
import styled from "styled-components";
import { BookingGuide, InputWithIcon, Button } from "../../components";
import { RiShipLine } from "react-icons/ri";
import { BiSupport, BiGlobeAlt, BiRightArrowAlt } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SlPlane } from "react-icons/sl";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { Link } from "@reach/router";

const ContainerOne = styled.section`
  padding: 1rem 3rem;

  & > div {
    padding: 5rem 6rem;
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

const ContainerTwo = styled.section`
  display: flex;
  flex-flow: row nowarp;
  gap: 2ch;
  padding: 1rem 5rem;

  & > div:nth-of-type(1) {
    flex: 1;
  }

  & > div:nth-of-type(2) {
    flex: 3;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0rem;
`;

const Li = styled.li`
  padding: 0.5rem 0rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 1rem;
  background: #ffffff;
  gap: 1ch;
  border: 1px solid rgba(218, 218, 218, 0.4);
  box-shadow: 39px 216px 88px rgba(0, 0, 0, 0.01),
    22px 122px 74px rgba(0, 0, 0, 0.05), 10px 54px 55px rgba(0, 0, 0, 0.09),
    2px 14px 30px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  margin-bottom: 0.6rem;
`;

const CardHead = styled.div`
  flex: 1;
  gap: 1ch;
  display: flex;
  flex-flow: column nowrap;
  border-right: 1px solid ${(props) => props.theme.placeholder};

  & > div {
    flex: 1;
  }

  & > div:nth-of-type(2) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 0.3rem;
    color: ${(props) => props.theme.placeholder};

    & > div:nth-child(even) {
      width: 2rem;
      height: 2px;
      background-color: ${(props) => props.theme.placeholder};
    }
  }

  & > div > div {
    display: inline-flex;
  }
`;

const CardTail = styled.div`
  display: flex;
  flex-flow: column nowrap;

  & > div {
    flex: 1;
  }
`;

interface Props {
  path: string;
}

export default ({}: Props) => {
  return (
    <>
      <ContainerOne>
        <div>
          <BookingGuide />
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
        <div>
          <h3>3 Top Quote(6 in Total)</h3>
          <Ul>
            <Li>
              <div>Filters</div>
              <MdKeyboardArrowDown size={20} />
            </Li>
            <Li>
              <div>Price</div>
              <MdKeyboardArrowDown size={20} />
            </Li>
            <Li>
              <div>Modes</div>
              <MdKeyboardArrowDown size={20} />
            </Li>
            <Li>
              <div>Seller</div>
              <MdKeyboardArrowDown size={20} />
            </Li>
          </Ul>
        </div>
        <div>
          <div></div>
          <div>
            <Card>
              <CardHead>
                <div>
                  <div>Best Value</div>
                  <div>Express</div>
                  <div>Est. 5 days</div>
                </div>
                <div>
                  <div>
                    <GrLocation size={18} />
                    110003, Delhi
                  </div>
                  <div></div>
                  <div>
                    <SlPlane size={18} />
                  </div>
                  <div></div>
                  <div>
                    <GrLocation size={18} />
                    200080, Shanghai
                  </div>
                </div>
                <div>Primetime WorldWide</div>
              </CardHead>
              <CardTail>
                <div>$ 3,982.63</div>
                <div>
                  <Button type="button" primary>
                    Select
                  </Button>
                </div>
                <Link to="">view details</Link>
              </CardTail>
            </Card>
          </div>
        </div>
      </ContainerTwo>
    </>
  );
};
