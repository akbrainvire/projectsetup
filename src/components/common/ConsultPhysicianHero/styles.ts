import Image from "next/image";
import styled from "styled-components";
import { CONSULT_PHYSICIAN_HERO_CONSTANTS } from "@/components/common/ConsultPhysicianHero/constant";
import { NotoSansFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";

const hero = CONSULT_PHYSICIAN_HERO_CONSTANTS;
const sans = NotoSansFont.style.fontFamily;

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  min-height: ${hero.MIN_HEIGHT};
  padding: ${hero.PADDING};
  border-radius: ${hero.BORDER_RADIUS};
  overflow: hidden;
  box-sizing: border-box;
`;

const BackgroundImage = styled(Image)`
  object-fit: cover;
  object-position: center top;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${hero.OVERLAY_GRADIENT};
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: ${hero.CONTENT_GAP};
  max-width: 520px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${hero.BADGE_GAP};
  align-self: flex-start;
  padding: ${hero.BADGE_PADDING};
  border-radius: ${hero.BADGE_BORDER_RADIUS};
  background: ${hero.BADGE_BACKGROUND};
  color: ${hero.BADGE_TEXT_COLOR};
  font-family: ${sans};
  font-size: ${hero.BADGE_FONT_SIZE};
  font-weight: ${hero.BADGE_FONT_WEIGHT};
  line-height: 1;
`;

const BadgeDot = styled.span`
  width: ${hero.BADGE_DOT_SIZE};
  height: ${hero.BADGE_DOT_SIZE};
  border-radius: 50%;
  background: ${hero.BADGE_DOT_COLOR};
  flex-shrink: 0;
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${sans};
  font-size: clamp(22px, 3vw, ${hero.TITLE_FONT_SIZE});
  font-weight: ${hero.TITLE_FONT_WEIGHT};
  line-height: ${hero.TITLE_LINE_HEIGHT};
  color: ${c.WHITE};
`;

const Description = styled.p`
  margin: 0;
  font-family: ${sans};
  font-size: ${hero.DESCRIPTION_FONT_SIZE};
  font-weight: ${hero.DESCRIPTION_FONT_WEIGHT};
  line-height: ${hero.DESCRIPTION_LINE_HEIGHT};
  color: ${c.WHITE};
`;

const ActionWrap = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 4px;
`;

export const ConsultPhysicianHeroStyles = {
  Card,
  BackgroundImage,
  Overlay,
  Content,
  Badge,
  BadgeDot,
  Title,
  Description,
  ActionWrap,
};
