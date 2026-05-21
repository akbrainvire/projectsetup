import styled from "styled-components";
import { HOME_CONSTANTS } from "@/modules/home/constant";
import { NotoSansFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";

const layout = HOME_CONSTANTS.LAYOUT;
const sans = NotoSansFont.style.fontFamily;

const Page = styled.main`
  position: relative;
  isolation: isolate;
  flex: 1;
  width: 100%;
  padding: 24px ${layout.PAGE_PADDING} 48px;
  background: ${c.WHITE};
  box-sizing: border-box;
`;

const Greeting = styled.h1`
  margin: 0 0 ${layout.GREETING_MARGIN_BOTTOM};
  font-family: ${sans};
  font-size: clamp(22px, 3vw, 28px);
  font-weight: 800;
  line-height: 1.2;
  color: ${c.TEXT_PRIMARY};
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(280px, 1fr);
  gap: ${layout.HERO_GRID_GAP};
  align-items: stretch;
  width: 100%;
  margin-bottom: ${layout.SECTION_GAP};

  @media (max-width: ${layout.TABLET_BREAKPOINT}) {
    grid-template-columns: 1fr;
  }
`;

const HeroPrimary = styled.div`
  min-width: 0;
  width: 100%;
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${layout.NAV_STACK_GAP};
  min-width: 0;
  width: 100%;
`;

const AppointmentsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-family: ${sans};
  font-size: 20px;
  font-weight: 800;
  line-height: 1.25;
  color: ${c.TEXT_PRIMARY};
`;

const AppointmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${layout.APPOINTMENTS_GRID_GAP};
  width: 100%;

  @media (max-width: ${layout.TABLET_BREAKPOINT}) {
    grid-template-columns: 1fr;
  }
`;

const AppointmentCardSlot = styled.div`
  min-width: 0;
  width: 100%;

  article {
    max-width: none;
  }
`;

const NavCardSlot = styled.div`
  width: 100%;

  button {
    width: 100%;
    max-width: none;
  }
`;

export const HomeStyles = {
  Page,
  Greeting,
  HeroSection,
  HeroPrimary,
  NavColumn,
  AppointmentsSection,
  SectionTitle,
  AppointmentsGrid,
  AppointmentCardSlot,
  NavCardSlot,
};
