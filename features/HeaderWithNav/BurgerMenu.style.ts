import { theme } from "@/styles";
import styled from "styled-components";

export const BarWrapper = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 1.8rem;
  height: auto;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const BaseBar = styled.div`
  background-color: ${theme.colors.primary};
  height: 0.3rem;
  width: 100%;
  border-radius: 1rem;
`;

export const BarOne = styled(BaseBar)``;
export const BarTwo = styled(BaseBar)``;
export const BarThree = styled(BaseBar)``;
