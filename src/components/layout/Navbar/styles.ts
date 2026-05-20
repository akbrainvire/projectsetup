import Link from "next/link";
import styled from "styled-components";
import { Icons } from "@/assets/svg";
import { NAVBAR_DEFAULTS } from "@/constants/navbar";
import { SITE_COLORS as c } from "@/utility/strings";

const Bar = styled.header`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: ${NAVBAR_DEFAULTS.HEIGHT};
  background: ${c.WHITE};
  border-bottom: ${NAVBAR_DEFAULTS.BORDER_WIDTH} solid ${c.GREY_6};
  box-sizing: border-box;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 0 ${NAVBAR_DEFAULTS.HORIZONTAL_PADDING};
  box-sizing: border-box;
`;

const BrandLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  line-height: 0;
`;

const LogoIcon = styled(Icons.AppLogoIcon)`
  display: block;
  height: ${NAVBAR_DEFAULTS.LOGO_HEIGHT};
  width: auto;
`;

const LanguageSelectWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  min-width: ${NAVBAR_DEFAULTS.LANGUAGE_SELECT_MIN_WIDTH};
`;

export const NavbarStyles = {
  Bar,
  Inner,
  BrandLink,
  LogoIcon,
  LanguageSelectWrapper,
};
