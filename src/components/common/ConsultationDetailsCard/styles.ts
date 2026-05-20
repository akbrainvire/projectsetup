import styled from "styled-components";
import {
  CONSULTATION_DETAILS_CARD_DEFAULTS,
  CONSULTATION_DETAILS_CARD_TYPOGRAPHY,
} from "@/constants/consultationDetailsCard";
import { NotoSansFont } from "@/styles/fonts";
import { SITE_COLORS as c } from "@/utility/strings";

const defaults = CONSULTATION_DETAILS_CARD_DEFAULTS;
const labelType = CONSULTATION_DETAILS_CARD_TYPOGRAPHY.LABEL;
const valueType = CONSULTATION_DETAILS_CARD_TYPOGRAPHY.VALUE;
const sans = NotoSansFont.style.fontFamily;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaults.GAP};
  padding: ${defaults.PADDING};
  border-radius: ${defaults.BORDER_RADIUS};
  border: 1px solid ${c.GREY_6};
  background: ${c.WHITE};
  box-sizing: border-box;
  width: 100%;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${defaults.COLUMN_GAP};
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  padding-bottom: 8px;
  border-bottom: 1px solid ${c.GREY_6};
`;

const Label = styled.span`
  font-family: ${sans};
  font-size: ${labelType.FONT_SIZE};
  font-weight: ${labelType.FONT_WEIGHT};
  line-height: ${labelType.LINE_HEIGHT};
  color: #737373;
`;

const Value = styled.span`
  font-family: ${sans};
  font-size: ${valueType.FONT_SIZE};
  font-weight: ${valueType.FONT_WEIGHT};
  line-height: ${valueType.LINE_HEIGHT};
  color: #464646;
`;

export const ConsultationDetailsCardStyles = {
  Card,
  Row,
  Field,
  Label,
  Value,
};
