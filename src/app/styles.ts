import styled from "styled-components";
import { SITE_COLORS } from "@/utility/strings";

const Main = styled.main`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px clamp(16px, 3vw, 40px);
`;

const ButtonSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
`;

const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const SelectableCardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  max-width: 629px;
`;

const IconInfoCardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`;

const DiscountCodeStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 846px;
`;

const BookingShowcaseShell = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  background: ${SITE_COLORS.PAGE_MUTED};
  box-sizing: border-box;
`;

const CountdownTimerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const BookingShowcasePanel = styled.div`
  width: 30%;
  min-width: 280px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HomePageStyles = {
  Main,
  Stack,
  ButtonSection,
  ButtonRow,
  CardSection,
  CardStack,
  SelectableCardRow,
  IconInfoCardRow,
  DiscountCodeStack,
  CountdownTimerRow,
  BookingShowcaseShell,
  BookingShowcasePanel,
};
