import styled from "styled-components";
import Paw from "./Icon";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 568px;
  width: 100%;
  padding: 0 15px;

  @media (min-width: 768px) {
    max-width: 1350px;
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  padding-top: 11.11%;
  margin-bottom: 2rem;
`;

export const PawIcon = styled(Paw)`
  position: absolute;
  left: ${({ x }) => x}%;
  top: ${({ y }) => y}%;
  transform: ${({ rotate }) => rotate && `rotate(${rotate}deg)`};
  width: ${({ width }) => width}%;
  height: ${({ height }) => height}%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
