import styled from "styled-components";
import { NAVBAR_DEFAULTS } from "@/constants/navbar";
import { PAYMENT_DEFAULTS, PAYMENT_TYPOGRAPHY } from "@/constants/payment";
import { NotoSansFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";

const defaults = PAYMENT_DEFAULTS;
const titleType = PAYMENT_TYPOGRAPHY.TITLE;
const subtitleType = PAYMENT_TYPOGRAPHY.SUBTITLE;
const sans = NotoSansFont.style.fontFamily;
const horizontalPadding = NAVBAR_DEFAULTS.HORIZONTAL_PADDING;

const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: ${defaults.PAGE_VERTICAL_PADDING} ${horizontalPadding}
    ${defaults.PAGE_BOTTOM_PADDING};
  background: ${c.WHITE};
  font-family: ${sans};
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${defaults.HEADER_GAP};
  margin-bottom: 28px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-family: ${sans};
  font-size: ${titleType.FONT_SIZE};
  font-weight: ${titleType.FONT_WEIGHT};
  line-height: ${titleType.LINE_HEIGHT};
  letter-spacing: ${titleType.LETTER_SPACING};
  text-align: center;
  color: ${c.FIELD_LABEL};
`;

const Subtitle = styled.p`
  margin: 0;
  font-family: ${sans};
  font-size: ${subtitleType.FONT_SIZE};
  font-weight: ${subtitleType.FONT_WEIGHT};
  line-height: ${subtitleType.LINE_HEIGHT};
  letter-spacing: ${subtitleType.LETTER_SPACING};
  text-align: center;
  vertical-align: middle;
  color: ${c.FIELD_LABEL};
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) ${defaults.FEE_COLUMN_WIDTH};
  gap: ${defaults.LAYOUT_GAP};
  align-items: start;
  width: 100%;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const MethodsColumn = styled.section`
  width: 100%;
  min-width: 0;
`;

const MethodsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaults.METHODS_STACK_GAP};
`;

const ErrorMessage = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: ${c.RED};
`;

const DiscountSlot = styled.div`
  margin-top: ${defaults.DISCOUNT_MARGIN_TOP};
`;

const FeeColumn = styled.aside`
  width: 100%;
  min-width: 0;

  & > * {
    width: 100%;
  }
`;

export const PaymentStyles = {
  Page,
  Container,
  Header,
  Title,
  Subtitle,
  Layout,
  MethodsColumn,
  MethodsList,
  ErrorMessage,
  DiscountSlot,
  FeeColumn,
};
